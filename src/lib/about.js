export const experience = [
	{
		title: { name: 'Software Engineer Intern', detail: 'Onye Inc.' },
		meta: 'Jun. 2026 - Aug. 2026 · Brooklyn, NY',
		points: [
			'Built a HIPAA-oriented radiology platform serving 4 user roles across 65 pages and 81 API routes.',
			'Built a SHA-256 integrity layer over resumable uploads, catching corrupt multi-gigabyte imaging studies.',
			'Hardened doctor-facing patient data routes with an MFA session guard.'
		]
	},
	{
		title: { name: 'Teaching Assistant', detail: 'Northeastern University' },
		meta: 'Jan. 2026 - May 2026 · CS 5010 Programming Design Paradigm'
	},
	{
		title: { name: 'Student Researcher', detail: 'Tan Kah Kee Innovation Laboratory' },
		meta: 'Sep. 2023 - Jun. 2025 · Xiamen, China',
		points: [
			'Boosted analysis efficiency by 50% with a multi-variate signal visualization platform.',
			'Improved valid-signal extraction by 30% using a Transformer classifier.',
			'Co-authored a paper on low-probability event detection, published in Nano Research (2025).'
		]
	},
	{
		title: { name: 'Software Engineer', detail: 'Alibaba Group (Freshippo)' },
		meta: 'Sep. 2019 - Jan. 2020 · Shanghai, China',
		points: [
			'Reduced daily reconciliation time by 80% by automating sales, returns, and loss aggregation.',
			'Cut online out-of-stock rates by 25% with an automated restocking alert system.'
		]
	}
];

export const projects = [
	{
		title: { name: 'keel', detail: 'Distributed Key-Value Store' },
		link: 'https://github.com/jason-te-sde/keel',
		meta: 'Java 21 · Raft · gRPC · RocksDB · Docker',
		points: [
			'Implemented the Raft consensus algorithm from scratch: leader election, log replication, and snapshots.',
			'Increased durable write throughput 60× by batching fsyncs in a custom write-ahead log.',
			'Built a fault-injection simulator and linearizability checker running 12M+ checks in 81 seconds.'
		]
	},
	{
		title: { name: 'till', detail: 'Oversell-Proof E-Commerce Platform' },
		link: 'https://github.com/jason-te-sde/till',
		meta: 'Java 21 · Spring Boot · React · PostgreSQL · Kafka · Redis',
		points: [
			'Guaranteed zero overselling: exactly 20 of 20 units sold to 200 concurrent buyers.',
			'Shipped a React/TypeScript storefront with search, cart, and timed checkout on a Spring Boot backend.',
			'Achieved 88% test coverage across 500+ Java and React tests, including end-to-end browser checkout.'
		]
	}
];

export const education = [
	{
		title: { name: 'M.S. in Computer Science', detail: 'Northeastern University' },
		meta: 'Sep. 2025 - May 2027 · Seattle, WA · GPA 4.0'
	},
	{
		title: { name: 'M.S. in Artificial Intelligence', detail: 'Xiamen University' },
		meta: 'Sep. 2022 - Jun. 2025 · China'
	},
	{
		title: {
			name: 'B.S. in Software Engineering',
			detail: "Xi'an University of Posts & Telecommunications"
		},
		meta: 'Sep. 2015 - Jun. 2019 · China'
	}
];

export const skills = [
	'Languages: Java, Python, JavaScript/TypeScript, C/C++, SQL, HTML/CSS',
	'Frameworks: Spring Boot, React, Node.js, Express, PyTorch',
	'Data & Messaging: PostgreSQL, MySQL, Redis, MongoDB, Kafka, RabbitMQ',
	'Cloud & DevOps: Docker, Kubernetes, AWS, GitHub Actions'
];
