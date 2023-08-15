---
layout: image-right
---

# Data Plane

**Data Plane:** “Touches every packet/ request in the system.  Responsible for service discovery, health checking, route, load balancing, authentication/ authorization, and observability.”

---
layout: image-right
---

# Data Plane

In the context of a service mesh, the data plane refers to the network infrastructure responsible for handling and managing the actual data traffic between services. 

The data plane consists of a set of lightweight proxies, often referred to as sidecar proxies, deployed alongside each service instance in the mesh. These sidecar proxies intercept and manage all incoming and outgoing traffic for their respective services. When a service wants to communicate with another service within the mesh, it sends its traffic through its sidecar proxy, and the proxy handles the communication on behalf of the service.

---

Key functions of the data plane include:

1. Service Discovery: The data plane proxies maintain an up-to-date service registry, allowing them to route traffic to the correct service instances.
2. Load Balancing: The data plane ensures that incoming requests are distributed across multiple instances of a service, improving resource utilization and providing high availability.
3. Traffic Management: The data plane is responsible for implementing traffic routing and control policies, such as request timeouts, retries, and circuit breaking, to ensure reliable communication between services.
4. Security: Data plane proxies can enforce security policies, such as encryption and authentication, to secure communication between services.
5. Telemetry and Monitoring: The data plane collects telemetry data, like request/response metrics, latency, and error rates, which are used for monitoring and observability purposes.

By offloading these responsibilities to the data plane, the application code becomes more focused on business logic, while the service mesh handles the operational concerns of service communication. This abstraction simplifies development, deployment, and maintenance of microservices in a distributed system.

