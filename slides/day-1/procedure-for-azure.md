# Procedure for Azure

## Create an AKS Cluster

The following commands can be used to login to Azure to create an AKS cluster for internal use.

You should change the group name as needed.

```sh
az login
az group create --name jimRG --location eastus
az aks create --resource-group jimRG \
--name Test --enable-managed-identity --node-count 1 \
--enable-addons monitoring --node-vm-size Standard_E2_v4
```

## Obtain Credentials for the TIO Azure AKS Clusters

You will need to open a ticket with Corporate IT to be added to the greymatter.io Demo subscription, Subscription ID d580ff1e-bd26-4479-8897-732173699701. Once you have been granted access to the subscription, you can login to the TIO AKS Cluster with the following commands. 

You will not be able to access this cluster without explicit permission from the TIO team. This is the Demo cluster for support customer demonstrations of Greymatter capabilities.

```sh
az login
az aks get-credentials --resource-group cto-demo --name east
```
