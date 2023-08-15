# Multi-Cloud

// TODO: Introductory language for this section [here](https://greymatter.atlassian.net/wiki/spaces/Marketing/pages/127401985/Answering+Common+Greymatter+Questions#What-platforms-do-you-support%3F)


Greymatter is completely platform agnostic. It is capable of operating in any public, private, hybrid, multi-cloud, container orchestration platform, or on-prem. This includes multi-platform support, for K8s, AWS EKS, Azure AKS, Openshift OCP, OKD, Konvoy, and bare metal. Our platform is also container agnostic, supporting K8s, Docker, CoreOS, OpenShift, Rancher, etc, or even no container at all.
 
We have no dependency on Kubernetes or container infrastructure. This is a key differentiator between us and our competition. We support other platforms through true native support that requires no orchestration with a Kubernetes environment for any components in the platform (i.e. control plane, data plane proxy, cache, communications bus, etc).  Our competition requires the usage of Istio which is tethered to the Kubernetes configuration workflow and API.

---

* Access the Greymatter East Mesh and locate the Bookinfo services in the dashboard. You can filter by owner to view all the services that make up the Bookinfo application.
* Open the file bookinfo-productpage.cue in the bookinfo-east-cue > greymatter > bookinfo directory. This file contains the configuration for the product page website.
* On the product page, you will see yellow or black stars representing different versions of reviews (v3 and v2). These stars indicate the services running in EKS.
* To perform a failover, scale down the bookinfo-reviews-v2 and bookinfo-reviews-v3 deployments in EKS. This action triggers Greymatter to divert all traffic to the failover reviews version in AKS.
* By following these steps, you can observe the failover mechanism in action, where traffic is redirected to the failover version in AKS when the primary services in EKS are scaled down.
* The example configuration and failover architecture are provided in the Bookinfo-productpage-Cue-Configs.
* To establish a connection between two Greymatter installations, you need to create a bridge connection for North-South traffic. This connection typically involves load balancers or gateways.
* To create the bridge files, use the Greymatter CLI to initialize the bridge configuration. Run the command greymatter init bridge -n tenant-demo in the repository where you want to configure the bridge. This command generates the greymatter/core/bridge.cue and k8s/bridge.yaml files.

---

* Next, deploy the k8s/bridge.yaml file after ensuring all the necessary settings are in place. Make sure the required certificates for ingress and egress are specified in the volumes and volumeMounts section.
* Configure the bridge.cue file starting with the (name) ingress configurations. If the bridge is used for failover, update the impersonate_proxy object inside the metrics_options object. You can specify multiple services and namespaces for failover by adding additional objects to the impersonate_proxy array.
* Consider the listener types depending on your environment setup, such as gsl.#MTLSListener for SPIRE-based environments or PKI-based environments. Leverage filters like the Greymatter Impersonations Filter (for PKI-based deployments) and Greymatter Health Check filters as needed.
* Configure the routes to forward traffic to the desired destinations, following the examples provided in the Creating an Egress in GSL | routes and Using instances in place of service discovery | Education articles. Ensure the routes use mTLS for secure communication between Greymatter installations.
* For the (name)-ingress configuration, which handles incoming connections from other Greymatter installations, specify the appropriate listener types and filters based on your environment setup. Comment out the block if you're not accepting incoming connections.
* Configure the routes in this ingress to connect to services within the same Greymatter installation. You can have multiple routes, and the upstreams should follow the Creating an Egress in GSL | routes approach using service-discovered instances.
