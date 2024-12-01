import Data1 from "../assets/ServicesData/serviceData1.png";
import Data1Second from "../assets/ServicesData/serviceData1_2nd.png";
import Data1Third from "../assets/ServicesData/serviceData1_3rd.png";
import Data1Fourth from "../assets/ServicesData/serviceData1_4th.png";
import Data2_1 from "../assets/ServicesData/serviceData2_1.png";
import Data2_2 from "../assets/ServicesData/serviceData2_2.png";
import Data3_1 from "../assets/ServicesData/serviceData3_1.jpg";
import Data4_1 from "../assets/ServicesData/serviceData4_1.jpg";
import Data4_2 from "../assets/ServicesData/serviceData4_2.jpg";
import Data5_1 from "../assets/ServicesData/serviceData5_1.jpg";
import Data6_1 from "../assets/ServicesData/serviceData6_1.jpg";
import Data7_1 from "../assets/ServicesData/serviceData7_1.jpg";
import Data8_1 from "../assets/ServicesData/serviceData8_1.jpg";


const serviceData1 = {
  service1: {
    readMoreContent: (
      <div style={{ fontSize: "18px" }}>
        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: "20px",
          }}
        >
          <b> Detailed Energy Audit </b>
        </div>
        Energy audits play a pivotal role in optimizing energy usage for
        enhanced sustainability and cost-effectiveness. These assessments are
        crucial for organizations and individuals aiming to reduce environmental
        impact and improve overall energy efficiency.
        <br></br>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <div style={{ flex: "60%" }}>
            <b>Energy Audit Process:</b>
            <ul>
              <li>
                Phase I - Pre Audit Phase
                <ul>
                  <li>
                    Data Collection: Gather information on energy consumption
                    and patterns.
                  </li>
                  <li>
                    Preliminary Discussions: Understand site operations and
                    objectives for the audit.
                  </li>
                  <li>Planning: Develop an audit plan and schedule.</li>
                </ul>
              </li>
              <li>
                Phase II - Audit Phase
                <ul>
                  <li>
                    On-site Inspection: Assess equipment and operational
                    practices.
                  </li>
                  <li>
                    Data Measurement: Collect data using tools and instruments
                    to evaluate energy usage.
                  </li>
                  <li>
                    Analysis: Identify inefficiencies and potential areas for
                    improvement.
                  </li>
                  <li>
                    Presentation with Top Management: Share preliminary
                    findings and gather feedback.
                  </li>
                </ul>
              </li>
              <li>
                Phase III - Post Audit Phase
                <ul>
                  <li>
                    Reporting: Document findings and recommend actionable
                    measures.
                  </li>
                  <li>
                    Implementation Support: Assist in adopting energy-saving
                    practices or technologies.
                  </li>
                  <li>
                    Follow-up: Monitor and evaluate the impact of implemented
                    measures.
                  </li>
                </ul>
              </li>
            </ul>

            <b>Instruments Used:</b>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <ul style={{ flex: "60%" }}>
                <li>Power Quality Analyzers</li>
                <li>Flue Gas Analyzer</li>
                <li>Ultrasonic Flowmeter</li>
                <li>Lux Meter</li>
                <li>Thermal Imaging Cameras</li>
                <li>Non Contact Thermometer</li>
                <li>Pitot Tube</li>
                <li>Ultrasonic Leak Detectors</li>
              </ul>
              <div
                style={{
                  flex: "40%",
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  marginLeft: "20px",
                }}
              >
                <img
                  src={Data1Third}
                  alt="Service Image 3"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    borderRadius: "10px",
                  }}
                />
                <img
                  src={Data1Fourth}
                  alt="Service Image 4"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    borderRadius: "10px",
                    marginRight: "100px",
                  }}
                />
              </div>
            </div>
          </div>

          <div style={{ flex: "40%", marginLeft: "20px" }}>
            <img
              src={Data1}
              alt="Service Image"
              style={{
                maxWidth: "100%",
                maxHeight: "300px",
                marginBottom: "10px",
                borderRadius: "10px",
              }}
            />
            <img
              src={Data1Second}
              alt="Service Image 2"
              style={{
                maxWidth: "100%",
                maxHeight: "300px",
                marginTop: "10px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </div>
    ),
  },
};

const serviceData2 = {
  service2: {
    readMoreContent: (
      <div style={{ fontSize: "18px" }}>
        {/* Green Audit Section */}
        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: "20px",
          }}
        >
          <b>Green Audit</b>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
          <ul style={{ flex: "60%" }}>
            <li>Energy Efficiency</li>
            <li>Water Management</li>
            <li>Waste Management</li>
            <li>Biodiversity and Green Cover</li>
            <li>Use of Renewable Energy and Sustainable Practices</li>
            <li>Awareness and Training</li>
          </ul>
          <div style={{ flex: "40%" }}>
            <img
              src={Data2_1}
              alt="Green Audit Image"
              style={{
                maxWidth: "100%",
                maxHeight: "200px",
                borderRadius: "10px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
        </div>

        <br></br>

        {/* Environmental Audit Section */}
        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: "20px",
          }}
        >
          <b>Environmental Audit</b>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
          <ul style={{ flex: "60%" }}>
            <li>Carbon Footprinting</li>
            <li>Air Quality Management</li>
            <li>Water and Soil Protection</li>
            <li>Resource Use and Conservation</li>
            <li>Hazardous Substances and Safety</li>
            <li>Noise Pollution</li>
            <li>Compliance with Environmental Laws</li>
            <li>Reporting and Documentation</li>
          </ul>
          <div style={{ flex: "40%" }}>
            <img
              src={Data2_2}
              alt="Environmental Audit Image"
              style={{
                maxWidth: "100%",
                maxHeight: "200px",
                borderRadius: "10px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
        </div>
      </div>
    ),
  },
};


const serviceData3 = {
  service2: {
    readMoreContent: (
      <div style={{ fontSize: "18px" }}>
        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: "20px",
          }}
        >
          <b>Installation and Commissioning</b>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
          {/* Text Section */}
          <div style={{ flex: "60%" }}>
            <b>1. Installation</b>
            <ul>
              <li>Pre-Installation Planning</li>
              <li>Equipment Installation</li>
              <li>Safety Measures</li>
            </ul>
            <b>2. Commissioning</b>
            <ul>
              <li>Pre-Commissioning Checks</li>
              <li>System Start-Up</li>
              <li>Performance Testing</li>
              <li>Validation and Optimization</li>
            </ul>
            <b>3. Documentation and Handover</b>
          </div>
          
          {/* Image Section */}
          <div style={{ flex: "40%" }}>
            <img
              src={Data3_1}
              alt="Installation and Commissioning"
              style={{
                maxWidth: "100%",
                maxHeight: "300px",
                borderRadius: "10px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
        </div>
      </div>
    ),
  },
};

const serviceData4 = {
  service2: {
    readMoreContent: (
      <div style={{ fontSize: "18px" }}>
        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: "20px",
          }}
        >
          <b>Energy Efficiency and Maintenance Services</b>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
          {/* Text Section */}
          <ul style={{ flex: "50%" }}>
            <li>Solar Rooftop Systems: Energy Efficiency Assessment</li>
            <li>Repair and Maintenance</li>
            <li>HVAC Systems: Energy Efficiency Assessment</li>
            <li>Repair and Maintenance</li>
          </ul>

          {/* Image Section */}
          <div style={{ flex: "50%", display: "flex", flexDirection: "column", gap: "10px" }}>
            <img
              src={Data4_1}
              alt="Energy Efficiency and Maintenance 1"
              style={{
                maxWidth: "70%",
                maxHeight: "200px",
                borderRadius: "10px",
              }}
            />
            <img
              src={Data4_2}
              alt="Energy Efficiency and Maintenance 2"
              style={{
                maxWidth: "70%",
                maxHeight: "200px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </div>
    ),
  },
};

const serviceData5 = {
  service2: {
    readMoreContent: (
      <div style={{ fontSize: "18px" }}>
        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: "20px",
          }}
        >
          <b>Comprehensive Service Workflow</b>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
          {/* Text Section */}
          <ul style={{ flex: "60%" }}>
            <li>Feasibility Study and Design</li>
            <li>Procurement of Components</li>
            <li>Installation</li>
            <li>Testing and Commissioning</li>
            <li>Post-Installation Maintenance</li>
          </ul>

          {/* Image Section */}
          <div style={{ flex: "40%" }}>
            <img
              src={Data5_1}
              alt="Service Workflow"
              style={{
                maxWidth: "80%",
                maxHeight: "250px",
                borderRadius: "10px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
        </div>
      </div>
    ),
  },
};

const serviceData6 = {
  service2: {
    readMoreContent: (
      <div style={{ fontSize: "18px" }}>
        {/* Title */}
        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: "20px",
          }}
        >
          <b>Sustainable Building Standards and Guidelines</b>
        </div>

        {/* Content Section */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
          {/* Text Section */}
          <div style={{ flex: "60%" }}>
            <div
              style={{
                textAlign: "center",
                marginTop: "15px",
                marginBottom: "15px",
                fontSize: "18px",
              }}
            >
              <b>Energy Conservation Building Code (ECBC)</b>
            </div>
            <ul>
              <li>Building Envelope</li>
              <li>HVAC Systems</li>
              <li>Lighting</li>
              <li>Electrical Systems</li>
              <li>Renewable Energy Integration</li>
              <li>Energy Monitoring</li>
            </ul>
            <div
              style={{
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "15px",
                fontSize: "18px",
              }}
            >
              <b>Indian Green Building Council (IGBC)</b>
            </div>
            <ul>
              <li>Energy Efficiency</li>
              <li>Water Efficiency</li>
              <li>Indoor Environmental Quality</li>
              <li>Material Conservation</li>
              <li>Site Sustainability</li>
              <li>Operations & Maintenance</li>
            </ul>
          </div>
          {/* Image Section */}
          <div style={{ flex: "40%" }}>
            <img
              src={Data6_1}
              alt="Sustainable Building Guidelines"
              style={{
                maxWidth: "80%",
                maxHeight: "350px",
                borderRadius: "10px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
        </div>
      </div>
    ),
  },
};

const serviceData7 = {
  service2: {
    readMoreContent: (
      <div style={{ fontSize: "18px" }}>
        {/* Title */}
        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: "20px",
          }}
        >
          <b>APFC Panel Installation and Commissioning</b>
        </div>

        {/* Content Section */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
          {/* Text Section */}
          <div style={{ flex: "60%" }}>
            <ul>
              <li>Electrical System Compatibility</li>
              <li>Installation of APFC Panel</li>
              <li>Testing and Commissioning</li>
            </ul>
          </div>

          {/* Image Section */}
          <div style={{ flex: "40%" }}>
            <img
              src={Data7_1}
              alt="APFC Panel Installation"
              style={{
                maxWidth: "80%",
                maxHeight: "300px",
                borderRadius: "10px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
        </div>
      </div>
    ),
  },
};

const serviceData8 = {
  service2: {
    readMoreContent: (
      <div style={{ fontSize: "18px" }}>
        {/* Title */}
        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: "20px",
          }}
        >
          <b>Electrical System Inspection and Maintenance</b>
        </div>

        {/* Content Section */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
          {/* Text Section */}
          <div style={{ flex: "60%" }}>
            <ul>
              <li>Electrical System Inspection</li>
              <li>Compliance Check</li>
              <li>Hazard Identification</li>
              <li>Maintenance Practices</li>
              <li>Energy Efficiency</li>
              <li>Lightning Protection</li>
              <li>Documentation and Reporting</li>
              <li>Emergency Systems</li>
              <li>Recommendations and Action Plan</li>
            </ul>
          </div>

          {/* Image Section */}
          <div style={{ flex: "40%" }}>
            <img
              src={Data8_1}
              alt="Electrical System Inspection"
              style={{
                maxWidth: "80%",
                maxHeight: "300px",
                borderRadius: "10px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
        </div>
      </div>
    ),
  },
};



export {
  serviceData1,
  serviceData2,
  serviceData3,
  serviceData4,
  serviceData5,
  serviceData6,
  serviceData7,
  serviceData8,
};
