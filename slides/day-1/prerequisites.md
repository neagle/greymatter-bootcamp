# Prerequisites

Before you begin installing the Enterprise Application Networking Platform in Greymatter’s internal infrastructure, you will need to install the following prerequisites.

## Required Tools

* **kubectl**: versions 1.21+
* **jf**: the CLI for jFrog (Artifactory), where we store release images and binaries.
* **git**: the Git CLI for interaction with Git repositories
* **cue**: the CUE CLI for interacting with configurations written in the CUE language.
* **aws cli**: to configure aws roles
* **awsume**: Greymatter uses awsume to assume roles with higher permissions to gain access to AWS resources
* **Azure CLI**: CLI for working with Azure

---

## Optional Tools

* **Lens**: an excellent application to easily interact with multiple Kubernetes clusters. (Greymatter has a corporate license, use your greymatter email as the user login)
* **k9s**: a cli tool for interacting with Kubernetes clusters
* **helm**: not directly used in greymatter installations, but a helpful tool to install applications that the Application Networking Platform will control.
* **k0ps**: kubernetes cluster tool (Note: the preferred method is deploying Azure AKS clusters, or AWS EKS clusters for demo purposes)
* **jq**: makes reading json output much nicer
* **deno**: tool used to install Greymatter’s k0ps installer “buttermilk-sky”. (note k0ps/AWS deployments are depricated as of spring 23')
* **Rancher Desktop**: an application that will allow you to deploy a k8s cluster locally.
