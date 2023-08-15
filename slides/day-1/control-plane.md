---
layout: image-right
---

# Control Plane

**Control Plane:** “Provides policy and configuration for all of the running data planes in the mesh.  Does not touch any packets/ requests in the system.  The control plane turns all of the data planes into a distributed system.”

---

# Control Plane Details

Our control plane provides all the features cited above and builds upon our drive to make our Greymatter platform a simple turnkey, enterprise, next generation application networking platform. We build on top of the open source go-control-plane and serve as co-maintainers of that project.  It is the reference implementation for all other control planes on the market and is also used for custom builds, including Istio. 

We fully support and comply with the XDS protocol – which is the de facto API for service mesh discovery.  We have extended our control plane to become a full-service communications plane in our enterprise offering by coupling core technologies to include Envoy, Go-Control-Plane, NATS.io , and CUE.  This translates into a high performant, distributed, and reliable management plane to control and orchestrate your fleet of microservice.  

---

**Examples of the importance of this include:** Simplified configuration, Granular control, Cross control plane management, Roll-back, Replay, Automated asset catalog management, Incremental updates all powered by our cache implementation, and an embedded event bus pipeline that manages, connects, and communicates to the entire fleet and any control plane.  

While our competition is focused on providing managed services for fragmented, evolving, open-source service mesh control plane implementations, our approach provides an OOTB end-to-end platform that enables the ability for an enterprise to simplify and govern software delivery, drive digital transformation, and increase speed to market. 

---

Our ubiquitous and agnostic implementation and redefinition of what a “control plane” means to large-scale deployments in global enterprises is driving the next generation of enterprise microservice implementation. For the above reasons and further details below, we rate ourselves a three (3) due to several unique APIs and feature-sets running as part of both our control and data planes.

We have added significant support for defining, generating, and validating many easy to use abstracted application networking objects that represent large blocks of  configuration code. This powers our multi-tenant, multi-team GitOps process, built-into the management plane, while enabling the enterprise to govern configuration sprawl and ensuring baseline configurations such as always “on”: Zero-trust mTLS, Authorization, Impersonation, and more.

Our control plane can also act as a central management plane for multi-mesh operations. Greymatter decouples control plane and configuration, combining with Catalog services to support easy registration of multiple control servers and mesh segments.

---

# Control Plane Telemetry

Greymatter generates the same types of telemetry as other similar Envoy-based service meshes. However, our platform is custom-built to treat data plane proxy-based service mesh telemetry as a source of operations and business intelligence. All telemetry data is captured, logged, and analyzed. This feature is unique to Greymatter and available OOTB. For this reason, we rate ourselves a three (3).  

Greymatter harnesses layers 3, 4, and 7 mesh telemetry to generate observability insights, typical Envoy “stats”, chain of evidence audit trailing to the route level, service footprints, and infrastructure. This metadata is used to power several OOTB business value-added services, including:

* Comprehensive zero-trust security through serving as a SIEM/SOAR/UEBA data resource.
* Automated service-level metrics observability and management, 
* Fine-grained risk-management policy implementation, management, and compliance, backed by live user metrics
* AI for service health monitoring, and anomaly detection,
* Root-cause analysis, and 
* Business insight and analytics covering users, services, and systems, including both activity and content.

A highly configurable NOC/SOC-like dashboard provides dynamic monitoring, analysis, and control designed to support developers, DevOps Engineers, Architects, and business decision makers alike. 
