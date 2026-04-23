export const projects = [
	{
		title: "Personal Speaker",
		slug: "personal-speaker",
		status: "Completed",
		category: "Hardware",
		heroImage: "/images/projects/personal-speaker/1.jpg",
		githubLink: "",
		demoLink: "",
		summary:
			"Custom high-power speaker system with real-time audio-reactive lighting driven by a custom bass detection algorithm.",
		longDescription:
			"Designed and built a high-output custom speaker system featuring procedurally generated audio-reactive LED animations synchronized in real time with music. The system analyzes incoming audio using statistical methods to detect bass hits and tempo, allowing the lighting to respond smoothly and dynamically. It includes Bluetooth connectivity, auxiliary input, adjustable bass and treble controls, and onboard controls for changing lighting modes and brightness.",
		technologies: [
			"Arduino",
			"Class D Amplifiers",
			"Bluetooth Module",
			"Audio Analysis",
			"LED Control",
			"Power Regulation",
		],
		highlights: [
			"Implemented real-time bass detection and BPM synchronization",
			"Developed procedural LED animations with multiple selectable modes",
			"Integrated Bluetooth, auxiliary input, and onboard controls",
			"Stabilized power delivery under high current demand",
		],
		challenge:
			"Balancing very high output volume with stable power delivery to avoid Arduino brownouts while staying within budget.",
		proudOf:
			"The animation software and how naturally the lights sync with music while still giving full control over modes and brightness.",
		images: [
			"/images/projects/personal-speaker/1.jpg",
			"/images/projects/personal-speaker/2.jpg",
			"/images/projects/personal-speaker/3.jpg",
		],
		videos: [
			"/videos/projects/personal-speaker/demo-1.mp4",
			"/videos/projects/personal-speaker/demo-2.mp4",
		],
	},
	{
		title: "Automated Beverage Pouring Machine",
		slug: "shot-pouring-machine",
		status: "Completed",
		category: "Hardware",
		heroImage: "/images/projects/shot-pouring-machine/1.jpg",
		githubLink: "",
		demoLink: "",
		summary:
			"Automated 8-cup drink dispensing system with sensor-based detection and synchronized pouring control.",
		longDescription:
			"Designed and built an automated beverage dispensing system capable of filling up to eight drinks simultaneously with a single input. Infrared sensors detect cup placement, indicate status with LEDs, and ensure liquid is only dispensed into occupied slots. The machine uses calibrated pump control for reliable and even pouring while meeting food-safe requirements and budget constraints.",
		technologies: [
			"Arduino",
			"IR Sensors",
			"Peristaltic Pumps",
			"Transistors",
			"Fluid System Design",
		],
		highlights: [
			"Implemented cup detection with real-time red/green feedback",
			"Poured multiple drinks simultaneously at controlled flow rates",
			"Used food-safe pumps, tubing, and containment materials",
			"Handled sourcing, budgeting, software, and assembly",
		],
		challenge:
			"Keeping the system fully food-safe while finding affordable components and maintaining reliable performance.",
		proudOf:
			"The reliability of the dispensing logic and the ability to fill multiple drinks accurately with minimal user input.",
		images: [
			"/images/projects/shot-pouring-machine/1.jpg",
			"/images/projects/shot-pouring-machine/2.jpg",
		],
		videos: ["/videos/projects/shot-pouring-machine/demo-1.mp4"],
	},
	{
		title: "DJ Stage Lights",
		slug: "dj-stage-lights",
		status: "Completed",
		category: "Hardware",
		heroImage: "/images/projects/dj-stage-lights/1.jpg",
		githubLink: "",
		demoLink: "",
		summary:
			"High-power audio-reactive stage lighting system with dynamic synchronization and custom control.",
		longDescription:
			"Built a high-power LED stage lighting system designed to synchronize dynamically with live music. The project extended the same audio-reactive ideas used in the speaker project to a much larger scale, requiring careful management of current draw, voltage stability, and signal integrity across long LED data runs.",
		technologies: [
			"Arduino",
			"Addressable LEDs",
			"Power Distribution",
			"Signal Integrity",
			"Reactive Lighting",
		],
		highlights: [
			"Built large-scale audio-reactive lighting behavior",
			"Managed very high current demand at peak brightness",
			"Resolved brownout issues through power adjustments",
			"Improved data reliability across long wire runs",
		],
		challenge:
			"Handling very high power demand and long data wiring without brownouts or signal instability.",
		proudOf:
			"Scaling reactive lighting concepts to a much larger and more immersive system while keeping synchronization intact.",
		images: [
			"/images/projects/dj-stage-lights/1.jpg",
			"/images/projects/dj-stage-lights/2.jpg",
			"/images/projects/dj-stage-lights/3.jpg",
		],
		videos: ["/videos/projects/dj-stage-lights/demo-1.mp4"],
	},
	{
		title: "IntelliLift",
		slug: "intellilift",
		status: "Completed",
		category: "Software",
		heroImage: "/images/projects/intellilift/1.jpg",
		githubLink: "",
		demoLink: "",
		summary:
			"Data-driven fitness app that tracks training, recovery, and performance with predictive analytics and social features.",
		longDescription:
			"Developed a fitness app that centralizes workout logging, sleep, nutrition, alcohol consumption, and lift progression into a single system. IntelliLift provides analytics such as recovery scoring, muscle-group set tracking, plateau detection, and PR prediction with confidence estimates, while also supporting friend groups and competitive social features.",
		technologies: [
			"Flutter",
			"Dart",
			"Analytics",
			"Mobile App Development",
			"Product Design",
		],
		highlights: [
			"Combined multiple lifestyle and training inputs into one tracking platform",
			"Built recovery and PR prediction systems",
			"Tracked volume across muscle groups down to individual heads",
			"Added friend groups and leaderboards for engagement",
		],
		challenge:
			"Designing useful analytics from noisy, real-world fitness data while keeping the app intuitive for users.",
		proudOf:
			"The predictive systems and the fact that the app turns raw logs into actionable feedback instead of just storing data.",
		images: [
			"/images/projects/intellilift/1.jpg",
			"/images/projects/intellilift/2.jpg",
			"/images/projects/intellilift/3.jpg",
		],
		videos: ["/videos/projects/intellilift/demo-1.mp4"],
	},
	{
		title: "Mechanical Hand",
		slug: "mechanical-hand",
		status: "In Progress",
		category: "Hardware / Robotics",
		heroImage: "/images/projects/mechanical-hand/1.jpg",
		githubLink: "",
		demoLink: "",
		summary:
			"Wireless tendon-driven robotic hand and sensing glove system designed to replicate precise, human-like finger motion.",
		longDescription:
			"This in-progress robotics project is focused on building a prosthetic-style mechanical hand capable of smooth, high-precision movement. The system pairs a tendon-driven robotic hand with a custom glove that captures a user's hand motion and transmits it wirelessly to the robotic hand in real time. The glove is designed to stay lightweight and minimally intrusive while still collecting detailed positional input. The sensing system uses magnets on sliding rails with hall sensors to infer tendon displacement, though a simplified redesign using a back plate and finger rings is also being considered. The robotic hand itself is planned around servo-driven tendons, external power delivery, and control logic intended to produce smooth, human-like motion through controlled velocity transitions rather than abrupt position jumps.",
		technologies: [
			"Arduino",
			"Arduino Nano",
			"Servos",
			"Hall Sensors",
			"Wireless Communication",
			"TPU Printing",
			"Tendon Mechanisms",
			"Power Regulation",
		],
		highlights: [
			"Designed around a wireless glove-to-hand control system",
			"Uses tendon-driven motion to emulate finger degrees of freedom",
			"Explores hall-sensor and magnet-based finger position sensing",
			"Targets smooth motion through velocity-curve-based control logic",
		],
		challenge:
			"Creating a sensing and control system that captures hand motion cleanly enough to translate into smooth, precise robotic movement while keeping the glove lightweight and unobtrusive.",
		proudOf:
			"The overall system concept — especially the attempt to pair an intuitive wearable input device with a tendon-driven robotic hand capable of more natural motion.",
		images: [
			"/images/projects/mechanical-hand/1.jpg",
			"/images/projects/mechanical-hand/2.jpg",
			"/images/projects/mechanical-hand/3.jpg",
		],
		videos: ["/videos/projects/mechanical-hand/demo-1.mp4"],
	},
	{
		title: "Knot Dating App",
		slug: "knot-dating-app",
		status: "In Progress",
		category: "Software",
		heroImage: "/images/projects/knot-dating-app/1.jpg",
		githubLink: "",
		demoLink: "",
		summary:
			"Final step before launch — currently awaiting App Store approval. Psychology-driven dating app focused on compatibility and long-term relationship potential.",
		longDescription:
			"Designed a dating app concept that prioritizes long-term compatibility over engagement-first swiping. The system uses onboarding responses to build relationship-oriented user vectors, scores mutual compatibility, and presents candidates through a compatibility-first flow before revealing photos. The structure is intended to encourage more meaningful evaluation by emphasizing emotional fit, relational traits, and curated personality information before appearance. The app is currently at the final step before launch and is waiting on App Store approval.",
		technologies: [
			"Flutter",
			"Matching Algorithm",
			"UI/UX Design",
			"Behavioral Product Design",
		],
		highlights: [
			"Built around compatibility scoring rather than swipe-first engagement",
			"Designed a staged profile flow",
			"Included chat and match activity features",
			"Reached final release stage and submitted for App Store approval",
		],
		challenge:
			"Balancing a compatibility-driven system with a user experience that still feels intuitive and engaging.",
		proudOf:
			"The compatibility-first concept and the decision to structure the app around more meaningful information before appearance.",
		images: [
			"/images/projects/knot-dating-app/1.jpg",
			"/images/projects/knot-dating-app/2.jpg",
		],
		videos: ["/videos/projects/knot-dating-app/demo-1.mp4"],
	},
];
