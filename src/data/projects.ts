export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  tags: string[];
  image: string;
  overview: string;
  problem: string;
  objectives: string;
  role: string;
  process: {
    research: string;
    insights: string;
    userFlow: string;
    wireframes: string;
    uiDesign: string;
    prototyping: string;
    testing: string;
    solution: string;
  };
  processImages?: {
    research?: string;
    design?: string;
    testing?: string;
    userFlow?: string;
  };
  gallery?: string[];
  results: string;
  tools: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "dxo-nik-collection",
    title: "Nik Collection 7",
    client: "DXO Labs",
    description: "UI design for the presentation of DXO's photo editing software suite.",
    tags: ["UI Design", "SaaS", "Photography"],
    image: "/DXO.png",
    overview: "Design of a user interface for the presentation of DXO's photo retouching software suite (Nik Collection 7).",
    problem: "The previous presentation was overly technical and failed to highlight the creative potential and performance gains of the new version.",
    objectives: "Clearly communicate the novelties and benefits of a suite of technical plugins for photographers, emphasizing performance and creativity.",
    role: "UI Designer",
    process: {
      research: "Analyzed photographer workflows and identified key pain points in plugin discovery and feature understanding.",
      insights: "Photographers value speed and creative control above all; technical specs should be secondary to visual results.",
      userFlow: "Streamlined the path from landing on the page to understanding specific plugin benefits and purchasing.",
      wireframes: "Created high-level structures that prioritize visual impact and clear feature categorization.",
      uiDesign: "Developed a dynamic and well-hierarchized presentation that transforms technical features into an engaging sales pitch.",
      prototyping: "Built interactive sections to demonstrate the 'before and after' effects of the plugins.",
      testing: "Validated the hierarchy with users to ensure key performance improvements were immediately visible.",
      solution: "A visual-first landing page that uses bold imagery and clear typography to sell the 'experience' of the software."
    },
    results: "A dynamic presentation that successfully converts technical interest into engagement and sales.",
    processImages: {
      research: "/DXO-1.png",
      userFlow: "/DXO-1.png",
      design: "/DXO-2.png",
      testing: "/DXO-2.png"
    },
    gallery: ["/DXO-1.png", "/DXO-2.png"],
    tools: ["Figma", "Design System", "Zeroheight", "Photoshop", "Adobe Firefly"],
    featured: true
  },
  {
    id: "dxo-photolab",
    title: "PhotoLab 8",
    client: "DXO Labs",
    description: "Rethinking the discovery experience for demanding photographers.",
    tags: ["UI Design", "UX Research", "SaaS"],
    image: "/photolab-1.png",
    overview: "User interface design for the presentation of DXO's photo retouching software suite (PhotoLab 8).",
    problem: "Demanding photographers found it difficult to grasp complex technologies like DeepPRIME, leading to underutilization of the software's core strengths.",
    objectives: "Rethink the discovery experience of the software and plugins, making complex technologies accessible and educational.",
    role: "UI Designer",
    process: {
      research: "Conducted deep dives into technical documentation to understand the unique selling points of DeepPRIME and other tools.",
      insights: "Users need to see the 'science' behind the results to trust the tool, but in a way that isn't overwhelming.",
      userFlow: "Designed an educational journey that explains the technology through interactive visual examples.",
      wireframes: "Focused on a 'build on science' theme, using grid layouts and technical callouts.",
      uiDesign: "Created an interface that successfully popularizes sophisticated photo tools through clean, modern aesthetics.",
      prototyping: "Implemented interactive sliders and technical overlays to explain complex processing steps.",
      testing: "User feedback confirmed that the educational approach increased trust in the software's capabilities.",
      solution: "A sophisticated yet accessible UI that guides the user towards action by proving technical superiority."
    },
    results: "An interface that successfully popularizes sophisticated photo tools and guides users effectively.",
    processImages: {
      research: "/photolab-2.png",
      userFlow: "/photolab-3.png",
      design: "/photolab-4.png",
      testing: "/photolab-5.png"
    },
    gallery: ["/photolab-1.png", "/photolab-2.png", "/photolab-3.png", "/photolab-4.png", "/photolab-5.png"],
    tools: ["Figma", "Design System", "Zeroheight", "Photoshop", "Adobe Firefly"],
    featured: true
  },
  {
    id: "endemika-voyages",
    title: "Endemika Voyages",
    client: "Endemika Voyages",
    description: "Immersive web application for ecotourism in Madagascar.",
    tags: ["Web Design", "Travel", "Mobile-First"],
    image: "/Endemika Voyages/3.png",
    overview: "Conception of a warm and immersive interface to promote ecotourism in Madagascar.",
    problem: "The existing site lacked visual appeal and had a complex booking process that discouraged mobile users.",
    objectives: "Modernize the brand image and optimize the user journey for quote/booking requests, particularly for Mobile-First users.",
    role: "UI Designer & Web Integrator",
    process: {
      research: "Studied travel booking behaviors and the unique appeal of Madagascar's biodiversity.",
      insights: "Travelers want to feel the 'warmth' of the destination before they commit; immersive photography is key.",
      userFlow: "Simplified the booking funnel from five steps to three, optimized for thumb-reach on mobile.",
      wireframes: "Prioritized clear navigation and prominent call-to-action elements for quote requests.",
      uiDesign: "Developed a warm, earth-toned palette that reflects the natural beauty of Madagascar.",
      prototyping: "Focused on smooth transitions and a responsive layout that feels native on mobile devices.",
      testing: "A/B testing showed a significant increase in quote requests with the simplified mobile flow.",
      solution: "A fluid and inspiring user experience that converts visual interest into concrete travel inquiries."
    },
    results: "A fluid user experience that significantly increased conversion rates for travel requests.",
    processImages: {
      research: "/Endemika Voyages/2.jpg",
      userFlow: "/Endemika Voyages/3.png",
      design: "/Endemika Voyages/2.png",
      testing: "/Endemika Voyages/3.jpg"
    },
    gallery: [
      "/Endemika Voyages/3.png",
      "/Endemika Voyages/4.jpg",
      "/Endemika Voyages/2.jpg",
      "/Endemika Voyages/2.png",
      "/Endemika Voyages/3.jpg",
      "/Endemika Voyages/5.png",
      "/Endemika Voyages/7.png"
    ],
    tools: ["Figma", "Design System", "HTML/CSS/JS", "PHP/MySQL"],
    featured: true
  },
  {
    id: "supdepub-omnes",
    title: "SupdePub Redesign",
    client: "Omnes Education",
    description: "Simplifying access to educational offers for a major advertising school.",
    tags: ["Web Design", "Education", "UX Design"],
    image: "/SupdePub/5.png",
    overview: "Creation of a simplified user interface for the SupdePub page within the Omnes Education portal.",
    problem: "The educational offer was presented in a complex way, making it hard for students to find key info like open days and campus locations.",
    objectives: "Make the presentation of the complex educational offer clearer, more structured, and engaging for students.",
    role: "UI Designer",
    process: {
      research: "Interviewed prospective students to understand their primary information needs when choosing a school.",
      insights: "Students prioritize 'experience' and 'outcomes' over administrative details; campus life and open days are top priorities.",
      userFlow: "Designed a path that leads from initial interest to event registration with minimal friction.",
      wireframes: "Used an airy structure with clear sections for events, programs, and campus details.",
      uiDesign: "Reflected the school's credibility through a professional yet young and dynamic design.",
      prototyping: "Built a responsive prototype focusing on the ease of finding and registering for open days.",
      testing: "Validated that the new structure reduced the time taken to find specific program information.",
      solution: "A structured, airy interface that facilitates decision-making for future students."
    },
    results: "An interface that facilitates student decision-making by offering quick and readable access to options.",
    processImages: {
      research: "/SupdePub/6.png",
      userFlow: "/SupdePub/7.png",
      design: "/SupdePub/8.png",
      testing: "/SupdePub/9.png"
    },
    gallery: [
      "/SupdePub/5.png",
      "/SupdePub/6.png",
      "/SupdePub/7.png",
      "/SupdePub/8.png",
      "/SupdePub/9.png",
      "/SupdePub/10.png"
    ],
    tools: ["Figma", "Design System", "Photoshop"],
    featured: true
  },
  {
    id: "1health-corporate",
    title: "1Health Corporate",
    client: "1Health",
    description: "Presenting the growth and organization of a complex health media group.",
    tags: ["Corporate Design", "Health", "UI Design"],
    image: "/1Health Corporate/0.png",
    overview: "Conception of a corporate user interface to present the growth and organization of a complex group (Human and Animal Health).",
    problem: "The group's rapid growth since 2018 led to a fragmented digital presence that failed to communicate its omnichannel reach.",
    objectives: "Use a clean design and structured information blocks to make the group's accelerated growth and omnichannel offer immediately understandable.",
    role: "UI Designer",
    process: {
      research: "Mapped out the group's various brands and services to find a common visual thread.",
      insights: "Trust and credibility are paramount in the health sector; the design must feel professional and reliable.",
      userFlow: "Created a narrative flow that takes the user from the group's history to its current market leadership.",
      wireframes: "Focused on data visualization and clear hierarchy for complex corporate information.",
      uiDesign: "Used a clean, professional aesthetic with a focus on simple yet impactful visual storytelling.",
      prototyping: "Developed interactive charts and timelines to showcase the group's growth trajectory.",
      testing: "Stakeholder reviews confirmed that the new site effectively communicated the group's scale and expertise.",
      solution: "A clear interface that transforms complex corporate data into a simple and striking visual narrative."
    },
    results: "A professional and reliable interface that inspires confidence and credibility in the health sector.",
    processImages: {
      research: "/1Health Corporate/1.png",
      userFlow: "/1Health Corporate/2.png",
      design: "/1Health Corporate/3.png",
      testing: "/1Health Corporate/4.png"
    },
    gallery: [
      "/1Health Corporate/0.png",
      "/1Health Corporate/1.png",
      "/1Health Corporate/2.png",
      "/1Health Corporate/3.png",
      "/1Health Corporate/4.png",
      "/1Health Corporate/6.png",
      "/1Health Corporate/7.png",
      "/1Health Corporate/8.png",
      "/1Health Corporate/9.png",
      "/1Health Corporate/10.png"
    ],
    tools: ["Figma", "Design System", "Photoshop"],
    featured: true
  },
  {
    id: "bien-etre-sante",
    title: "Bien-être & Santé",
    client: "1Health",
    description: "Mobile-first redesign of a health and wellness magazine blog.",
    tags: ["Blog Design", "Mobile-First", "Health"],
    image: "/Bien-être & Santé/9.png",
    overview: "Redesign of the Bien-être & Santé blog with a focus on mobile user journeys and audience segmentation.",
    problem: "The existing blog was difficult to navigate on mobile and didn't effectively distinguish between general readers and professionals.",
    objectives: "Conceive a credible and readable content platform capable of managing a double audience: the general public and professionals.",
    role: "UI Designer",
    process: {
      research: "Analyzed reading habits on mobile and identified the need for a smoother registration flow.",
      insights: "Health information needs to be presented in a reassuring and professional manner to build reader trust.",
      userFlow: "Designed separate entry points and content hierarchies for consumers and pharmacists.",
      wireframes: "Prioritized readability and quick access to different health categories (nutrition, psycho, etc.).",
      uiDesign: "Implemented a Mobile-First, well-hierarchized interface that ensures the credibility of information.",
      prototyping: "Focused on the registration and login flow to ensure it was as frictionless as possible on small screens.",
      testing: "User testing confirmed that the new segmentation effectively served both target audiences.",
      solution: "A well-structured mobile interface that manages differentiated access for consumers and professionals."
    },
    results: "A highly readable and credible platform that effectively manages a diverse audience.",
    processImages: {
      research: "/Bien-être & Santé/10.png",
      userFlow: "/Bien-être & Santé/11.png",
      design: "/Bien-être & Santé/12.png",
      testing: "/Bien-être & Santé/13.png"
    },
    gallery: [
      "/Bien-être & Santé/9.png",
      "/Bien-être & Santé/10.png",
      "/Bien-être & Santé/11.png",
      "/Bien-être & Santé/12.png",
      "/Bien-être & Santé/13.png",
      "/Bien-être & Santé/14.png",
      "/Bien-être & Santé/15.png"
    ],
    tools: ["Figma", "FigJam", "Design System", "Photoshop"],
    featured: false
  },
  {
    id: "senioradom-purchase",
    title: "SeniorAdom Purchase Path",
    client: "Groupe VYV",
    description: "Streamlining the subscription process for teleassistance services.",
    tags: ["UX Design", "E-commerce", "HealthTech"],
    image: "/1Health Corporate/SeniorAdom Purchase Path/9.png",
    overview: "Conception of a 5-step purchase path for SeniorAdom's teleassistance products.",
    problem: "The subscription process was complex and confusing, leading to high drop-off rates during the equipment selection phase.",
    objectives: "Make the subscription process clear, reassuring, and simple, despite complex technical choices (fall detectors, cameras).",
    role: "UX/UI Designer",
    process: {
      research: "Conducted usability audits on the existing flow and identified key points of friction.",
      insights: "Users in this sector need constant reassurance; clear icons and visual blocks help reduce anxiety.",
      userFlow: "Refined the process into 5 clear steps: Offer, Beneficiary, Contact, Delivery, Validation.",
      wireframes: "Used visual blocks and clear icons to guide the user through complex equipment choices.",
      uiDesign: "Optimized the UI to inspire confidence and professionalism, using a calming and clear color palette.",
      prototyping: "Built a high-fidelity prototype to test the clarity of the equipment selection step.",
      testing: "Observed users completing the flow and made iterative improvements to the 'Delivery' step.",
      solution: "A transactional interface that minimizes friction and facilitates understanding of subscription options."
    },
    results: "A streamlined purchase path that significantly improved the service's potential conversion rate.",
    processImages: {
      research: "/1Health Corporate/SeniorAdom Purchase Path/15.png",
      userFlow: "/1Health Corporate/SeniorAdom Purchase Path/16.png",
      design: "/1Health Corporate/SeniorAdom Purchase Path/17.png",
      testing: "/1Health Corporate/SeniorAdom Purchase Path/18.png"
    },
    gallery: [
      "/1Health Corporate/SeniorAdom Purchase Path/9.png",
      "/1Health Corporate/SeniorAdom Purchase Path/15.png",
      "/1Health Corporate/SeniorAdom Purchase Path/16.png",
      "/1Health Corporate/SeniorAdom Purchase Path/17.png",
      "/1Health Corporate/SeniorAdom Purchase Path/18.png",
      "/1Health Corporate/SeniorAdom Purchase Path/19.png"
    ],
    tools: ["Adobe XD", "Photoshop", "Zeplin", "Axure"],
    featured: false
  },
  {
    id: "inseec-landing",
    title: "Inseec BBA Landing",
    client: "Omnes Education",
    description: "Event-focused landing page for school admissions and open days.",
    tags: ["Landing Page", "Conversion", "Education"],
    image: "/1Health Corporate/Inseec BBA Landing/00.png",
    overview: "Creation of an event-focused landing page for Inseec BBA (Omnes Education).",
    problem: "Prospective students were hesitant to register for open days due to a lack of clear information about the event's schedule and benefits.",
    objectives: "Maximize participation in key events (Open Days, Career Evenings) by providing clear info on the schedule and benefits.",
    role: "UX/UI Designer",
    process: {
      research: "Analyzed competitor landing pages and student registration behaviors.",
      insights: "Social proof and clear 'next steps' are the biggest drivers for event registration.",
      userFlow: "Designed a path that leads from event discovery to registration, highlighting key 'Top 10' arguments.",
      wireframes: "Focused on a conversion-centric layout with prominent CTA buttons and clear value propositions.",
      uiDesign: "Used icons and numbers to reinforce the school's attractiveness and make registration easy.",
      prototyping: "Tested the mobile responsiveness of the registration form to ensure high completion rates.",
      testing: "Validated that the 'promise' of what the participant would discover on campus was clear and compelling.",
      solution: "A targeted landing page that converts simple navigation into event registrations."
    },
    results: "A high-converting landing page that effectively drives student recruitment and event attendance.",
    processImages: {
      research: "/1Health Corporate/Inseec BBA Landing/20.png",
      userFlow: "/1Health Corporate/Inseec BBA Landing/21.png",
      design: "/1Health Corporate/Inseec BBA Landing/22.png",
      testing: "/1Health Corporate/Inseec BBA Landing/23.png"
    },
    gallery: [
      "/1Health Corporate/Inseec BBA Landing/00.png",
      "/1Health Corporate/Inseec BBA Landing/20.png",
      "/1Health Corporate/Inseec BBA Landing/21.png",
      "/1Health Corporate/Inseec BBA Landing/22.png",
      "/1Health Corporate/Inseec BBA Landing/23.png"
    ],
    tools: ["Figma", "Design System", "Photoshop"],
    featured: false
  },
  {
    id: "senioradom-corporate",
    title: "SeniorAdom Corporate",
    client: "Groupe VYV",
    description: "Corporate site for a leader in teleassistance services.",
    tags: ["Corporate Design", "Health", "Web Design"],
    image: "/SeniorAdom Corporate/27.png",
    overview: "Conception of a modular architecture in blocks for SeniorAdom's corporate site.",
    problem: "The previous site lacked a clear hierarchy of information, making it difficult for institutional partners and clients to find relevant solutions.",
    objectives: "Establish the company's credibility in the teleassistance sector by highlighting key institutional partnerships and explaining service value simply.",
    role: "UX/UI Designer",
    process: {
      research: "Analyzed the needs of both B2B partners and B2C clients to create a balanced information architecture.",
      insights: "Institutional partners look for stability and scale; clients look for empathy and ease of use.",
      userFlow: "Designed a modular structure that allows for easy routing to targeted paths (Professional vs. Client).",
      wireframes: "Used a block-based layout to ensure flexibility and clear information hierarchy.",
      uiDesign: "Created a professional and trustworthy aesthetic that aligns with the Groupe VYV brand identity.",
      prototyping: "Tested the navigation flow to ensure that both target audiences could find their respective sections quickly.",
      testing: "Feedback from partners confirmed that the new site effectively communicated the company's scale and expertise.",
      solution: "A modular, block-based interface that establishes trust and simplifies access to diverse solutions."
    },
    results: "A professional interface that effectively establishes trust and simplifies access for all stakeholders.",
    processImages: {
      research: "/SeniorAdom Corporate/24.png",
      userFlow: "/SeniorAdom Corporate/25.png",
      design: "/SeniorAdom Corporate/26.png",
      testing: "/SeniorAdom Corporate/28.png"
    },
    gallery: [
      "/SeniorAdom Corporate/27.png",
      "/SeniorAdom Corporate/24.png",
      "/SeniorAdom Corporate/25.png",
      "/SeniorAdom Corporate/26.png",
      "/SeniorAdom Corporate/28.png",
      "/SeniorAdom Corporate/29.png"
    ],
    tools: ["Adobe XD", "Photoshop", "Zeplin", "Axure"],
    featured: false
  },
  {
    id: "senioradom-landing",
    title: "SeniorAdom Landing",
    client: "Groupe VYV",
    description: "High-performance landing page for lead generation.",
    tags: ["Landing Page", "Lead Gen", "Health"],
    image: "/1Health Corporate/SeniorAdom Landing/Capture d’écran 2026-03-31 à 5.01.13 PM.png",
    overview: "Conception of a high-performance landing page centered on a lead capture form.",
    problem: "The existing lead generation flow was too technical and didn't provide enough reassurance to potential clients.",
    objectives: "Optimize the lead conversion rate by making the information on a sensitive service (teleassistance) reassuring, credible, and simple to choose.",
    role: "UX/UI Designer",
    process: {
      research: "Studied the psychological barriers to adopting teleassistance services for seniors.",
      insights: "Transparency and simplicity are the biggest drivers of trust in this sector.",
      userFlow: "Designed a flow that simplifies the complex decision-making process by clearly organizing service levels.",
      wireframes: "Focused on a highly structured layout around a well-positioned lead capture form.",
      uiDesign: "Used a playful yet professional approach to explain complex features simply.",
      prototyping: "Tested the form's usability and the clarity of the 'request a quote' call-to-action.",
      testing: "A/B testing showed that the clearer organization of service levels led to a higher volume of leads.",
      solution: "A highly structured landing page that transforms technical info into a simple and quick purchase decision."
    },
    results: "A high-performance landing page that significantly increased the volume of qualified leads.",
    processImages: {
      research: "/1Health Corporate/SeniorAdom Landing/Capture d’écran 2026-03-31 à 5.01.08 PM.png",
      userFlow: "/1Health Corporate/SeniorAdom Landing/Capture d’écran 2026-03-31 à 5.02.59 PM.png",
      design: "/1Health Corporate/SeniorAdom Landing/Capture d’écran 2026-03-31 à 5.03.20 PM.png"
    },
    gallery: [
      "/1Health Corporate/SeniorAdom Landing/Capture d’écran 2026-03-31 à 5.01.13 PM.png",
      "/1Health Corporate/SeniorAdom Landing/Capture d’écran 2026-03-31 à 5.01.08 PM.png",
      "/1Health Corporate/SeniorAdom Landing/Capture d’écran 2026-03-31 à 5.02.59 PM.png",
      "/1Health Corporate/SeniorAdom Landing/Capture d’écran 2026-03-31 à 5.03.20 PM.png"
    ],
    tools: ["Adobe XD", "Photoshop", "Zeplin", "Axure"],
    featured: false
  }
];
