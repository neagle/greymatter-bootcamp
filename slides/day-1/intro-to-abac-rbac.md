# Intro to ABAC / RBAC

## Configuring RBAC

The GSL Role Based Access Control #RBACFilter provides service-level and method-level access control for a service. You can use it to allow or deny requests based on the action and whether a matching policy is found. Each policy defines permissions and matching rules for incoming requests.

### To configure a Greymatter service with explicit RBAC rules, you can follow these steps:

* Create an RBAC policy in CUE language that defines the access rules for your service. You can use the example policy below as a starting point and modify it to fit your specific requirements.
* Save the policy file as a .cue file in the ~/greymatter/policies/ directory.
* Configure your service's data plane proxy to use the Greymatter RBAC filter by adding the filter to your tenant service file configuration. 

### Implementing a RBAC Policy

In order to implement the RBAC policy for a service, you will need to create an ingress listener that will call the RBAC filter. For ease of portability, and code reuse, it is recommended you make the RBAC rules a policy. 
