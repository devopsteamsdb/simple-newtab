window.dashboardData = {
    "pages": [
        {
            "id": "default",
            "name": "Home"
        },
        {
            "id": "devops",
            "name": "DevOps"
        },
        {
            "id": "monitoring",
            "name": "Monitoring"
        },
        {
            "id": "cloud",
            "name": "Cloud"
        },
        {
            "id": "containers",
            "name": "Containers"
        },
        {
            "id": "databases",
            "name": "Databases"
        },
        {
            "id": "security",
            "name": "Security"
        },
        {
            "id": "network",
            "name": "Network"
        }
    ],
    "systems": [
        {
            "name": "Monitor",
            "image": "assets/monitor.png",
            "image_mode": "fill",
            "image_size": "90",
            "back_color": "#11161f",
            "front_color": "#ffffff",
            "links": [
                {
                    "url": "https://home",
                    "text": "HOME"
                }
            ],
            "pages": [
                "default"
            ]
        },
        {
            "name": "RabbitMQ",
            "image": "assets/rabbitmq.png",
            "image_mode": "fit",
            "image_size": "100",
            "back_color": "#f76300",
            "front_color": "#f5f5f5",
            "links": [{ "url": "https://rabbitmq.com", "text": "RabbitMQ" }],
            "pages": ["default"]
        },
        {
            "name": "VMware",
            "image": "assets/vmware.png",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#717074",
            "front_color": "#11161f",
            "links": [{ "url": "https://vmware.com", "text": "VMware" }],
            "pages": ["default", "network"]
        },
        {
            "name": "PostgreSQL",
            "image": "assets/postgresql.png",
            "image_mode": "fit",
            "image_size": "75",
            "back_color": "#336791",
            "front_color": "#ffffff",
            "links": [{ "url": "https://postgresql.org", "text": "PostgreSQL" }],
            "pages": ["databases", "default"]
        },
        {
            "name": "MongoDB",
            "image": "assets/mongodb.png",
            "image_mode": "fit",
            "image_size": "70",
            "back_color": "#00684a",
            "front_color": "#ffffff",
            "links": [{ "url": "https://mongodb.com", "text": "MongoDB" }],
            "pages": ["databases", "default"]
        },
        {
            "name": "MySQL",
            "image": "assets/mysql.png",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#00618a",
            "front_color": "#ffffff",
            "links": [{ "url": "https://mysql.com", "text": "MySQL" }],
            "pages": ["databases", "default"]
        },
        {
            "name": "Redis",
            "image": "assets/redis.png",
            "image_mode": "fit",
            "image_size": "75",
            "back_color": "#dc382d",
            "front_color": "#ffffff",
            "links": [{ "url": "https://redis.io", "text": "Redis" }],
            "pages": ["databases", "default"]
        },
        {
            "name": "Elasticsearch",
            "image": "assets/elasticsearch.svg",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#005571",
            "front_color": "#ffffff",
            "links": [{ "url": "https://elastic.co", "text": "Elastic" }],
            "pages": ["databases", "default"]
        },
        {
            "name": "Kubernetes",
            "image": "assets/kubernetes.png",
            "image_mode": "fit",
            "image_size": "75",
            "back_color": "#326ce5",
            "front_color": "#ffffff",
            "links": [{ "url": "https://kubernetes.io", "text": "K8s" }],
            "pages": ["containers", "devops", "default"]
        },
        {
            "name": "OpenShift",
            "image": "assets/openshift.png",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#ee0000",
            "front_color": "#ffffff",
            "links": [{ "url": "https://openshift.com", "text": "OpenShift" }],
            "pages": ["containers", "devops", "default"]
        },
        {
            "name": "Docker",
            "image": "assets/docker.png",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#2496ed",
            "front_color": "#ffffff",
            "links": [{ "url": "https://docker.com", "text": "Docker" }],
            "pages": ["containers", "devops", "default"]
        },
        {
            "name": "Jenkins",
            "image": "assets/jenkins.png",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#d33833",
            "front_color": "#ffffff",
            "links": [{ "url": "https://jenkins.io", "text": "Jenkins" }],
            "pages": ["devops", "default"]
        },
        {
            "name": "GitLab",
            "image": "assets/gitlab.png",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#fc6d26",
            "front_color": "#ffffff",
            "links": [{ "url": "https://gitlab.com", "text": "GitLab" }],
            "pages": ["devops", "default"]
        },
        {
            "name": "GitHub",
            "image": "assets/github.png",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#24292e",
            "front_color": "#ffffff",
            "links": [{ "url": "https://github.com", "text": "GitHub" }],
            "pages": ["devops", "default"]
        },
        {
            "name": "ArgoCD",
            "image": "assets/argocd.png",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#ef7b4d",
            "front_color": "#ffffff",
            "links": [{ "url": "https://argoproj.github.io/argo-cd/", "text": "ArgoCD" }],
            "pages": ["containers", "devops", "default"]
        },
        {
            "name": "Terraform",
            "image": "assets/terraform.png",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#7b42bc",
            "front_color": "#ffffff",
            "links": [{ "url": "https://terraform.io", "text": "Terraform" }],
            "pages": ["devops", "cloud", "default"]
        },
        {
            "name": "AWS",
            "image": "assets/aws.png",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#232f3e",
            "front_color": "#ff9900",
            "links": [{ "url": "https://aws.amazon.com", "text": "AWS" }],
            "pages": ["cloud", "default"]
        },
        {
            "name": "Azure",
            "image": "assets/azure.png",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#0078d4",
            "front_color": "#ffffff",
            "links": [{ "url": "https://azure.microsoft.com", "text": "Azure" }],
            "pages": ["cloud", "default"]
        },
        {
            "name": "Google Cloud",
            "image": "assets/gcp.png",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#4285f4",
            "front_color": "#ffffff",
            "links": [{ "url": "https://cloud.google.com", "text": "GCP" }],
            "pages": ["cloud", "default"]
        },
        {
            "name": "DigitalOcean",
            "image": "assets/digitalocean.png",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#0080ff",
            "front_color": "#ffffff",
            "links": [{ "url": "https://digitalocean.com", "text": "DigitalOcean" }],
            "pages": ["cloud"]
        },
        {
            "name": "Grafana",
            "image": "assets/grafana.png",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#f46800",
            "front_color": "#ffffff",
            "links": [{ "url": "https://grafana.com", "text": "Grafana" }],
            "pages": ["monitoring", "default"]
        },
        {
            "name": "Prometheus",
            "image": "assets/prometheus.svg",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#e6522c",
            "front_color": "#ffffff",
            "links": [{ "url": "https://prometheus.io", "text": "Prometheus" }],
            "pages": ["monitoring", "default"]
        },
        {
            "name": "Splunk",
            "image": "assets/splunk.png",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#72af36",
            "front_color": "#e7ffd6",
            "links": [{ "url": "https://splunk.com", "text": "Splunk" }],
            "pages": ["monitoring", "default"]
        },
        {
            "name": "Uptime Kuma",
            "image": "assets/uptimekuma.svg",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#6ad09d",
            "front_color": "#ffffff",
            "links": [{ "url": "https://github.com/louislam/uptime-kuma", "text": "Uptime Kuma" }],
            "pages": ["monitoring", "default"]
        },
        {
            "name": "Nginx",
            "image": "assets/nginx.svg",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#009639",
            "front_color": "#ffffff",
            "links": [{ "url": "https://nginx.com", "text": "Nginx" }],
            "pages": ["network", "default"]
        },
        {
            "name": "Traefik",
            "image": "assets/traefik.png",
            "image_mode": "fit",
            "image_size": "90",
            "back_color": "#24a1c1",
            "front_color": "#ffffff",
            "links": [{ "url": "https://traefik.io", "text": "Traefik" }],
            "pages": ["network", "default"]
        },
        {
            "name": "Cisco",
            "image": "assets/cisco.png",
            "image_mode": "fit",
            "image_size": "75",
            "back_color": "#049fd9",
            "front_color": "#ffffff",
            "links": [{ "url": "https://cisco.com", "text": "Cisco" }],
            "pages": ["network", "default"]
        },
        {
            "name": "Check Point",
            "image": "assets/checkpoint.svg",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#e21c39",
            "front_color": "#ffffff",
            "links": [{ "url": "https://checkpoint.com", "text": "Check Point" }],
            "pages": ["security"]
        },
        {
            "name": "Palo Alto",
            "image": "assets/paloalto.png",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#fa582d",
            "front_color": "#ffffff",
            "links": [{ "url": "https://paloaltonetworks.com", "text": "Palo Alto" }],
            "pages": ["security", "network", "default"]
        },
        {
            "name": "CyberArk",
            "image": "assets/cyberark.png",
            "image_mode": "fit",
            "image_size": "70",
            "back_color": "#0074ba",
            "front_color": "#ffffff",
            "links": [{ "url": "https://cyberark.com", "text": "CyberArk" }],
            "pages": ["security"]
        },
        {
            "name": "McAfee",
            "image": "assets/mcafee.png",
            "image_mode": "fit",
            "image_size": "70",
            "back_color": "#c01818",
            "front_color": "#ffffff",
            "links": [{ "url": "https://mcafee.com", "text": "McAfee" }],
            "pages": ["security"]
        },
        {
            "name": "WordPress",
            "image": "assets/wordpress.png",
            "image_mode": "fit",
            "image_size": "80",
            "back_color": "#21759b",
            "front_color": "#ffffff",
            "links": [{ "url": "https://wordpress.org", "text": "WordPress" }],
            "pages": ["default"]
        }
    ],
    "presets": [],
    "settings": {
        "footer_text": "Made with Love by DevOps Team"
    }
};
