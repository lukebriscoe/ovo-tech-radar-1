const quadrants = {
    "languagesAndframeworks": {
        "quadrant": 0,
        "rings": {
            "adopt": [
                "Akka (Scala)",
                "Akka Http",
                "Akka Streams",
                "Alpakka",
                "Angular",
                "Clojure",
                "Doobie",
                "fs2",
                "Cats",
                "http4s",
                "JavaScript",
                "Node.js",
                "Python",
                "ReactJS",
                "Scala",
                "TypeScript"
            ],
            "assess": [
                "Aurelia"
            ],
            "trial": [
                "Go",
                "GraphQL",
                "R"
            ],
            "hold": [
                "AngularJS (1.x)",
                "Apache Camel",
                "Haskell",
                "Java",
                "Ruby",
                "Spray",
                "Spring"
            ]
        }
    },
    "infrastructureAndHosting": {
        "quadrant": 1,
        "rings": {
            "adopt": [
                "Aiven",
                "AWS EB",
                "AWS ECS",
                "Circle CI",
                "Docker",
                "GoCD",
                "Google Kubernetes Engine",
                "Kubernetes",
                "Salesforce DX",
                "Terraform",
            ],
            "assess": [
                "AWS CloudFormation",
                "AWS Lambda",
                "CDN",
                "Dataproc",
                "GCP",
                "Google Load Balancer",
                "HAProxy",
                "Jenkins",
                "Kibana",
                "Salesforce",
            ],
            "trial": [
                "AWS ElastiCache",
                "Travis CI",
                "Vagrant",
                "Concourse CI",
                "Google Cloud Functions",
                "Helm",
            ],
            "hold": [
                "Azure",
                "Chef",
                "Team Managed NGINX",
            ]
        }
    },
    "loggingMonitoringAlerting": {
        "quadrant": 2,
        "rings": {
            "adopt": [
                "AWS CloudTrail",
                "AWS CloudWatch",
                "Elasticsearch",
                "Grafana",
                "Graylog",
                "InfluxDB",
                "Kamon",
                "New Relic",
                "Prometheus",
                "VPC flow logs"
            ],
            "assess": [
                "Chronograf",
                "Kapacitor",
                "Librato",
                "Pagerduty",
                "Stackdriver",
                "Telegraf"
            ],
            "trial": [
                "DataDog"
            ],
            "hold": [
                "Logz.io",
                "Sensu"
            ]
        }
    },
    "dataManagement": {
        "quadrant": 3,
        "rings": {
            "adopt": [
                "AWS RDS",
                "AWS S3",
                "AWS SQS",
                "AWS SNS",
                "BigQuery",
                "Kafka",
                "MongoDB",
                "PostgreSQL"
            ],
            "assess": [
                "Google Cloud Storage",
                "Redis"
            ],
            "trial": [
                "AWS Dynamodb",
                "GCP Datastore",
                "Google Cloud SQL",
                "Google Datastore",
                "MongoDB (mLab)"
            ],
            "hold": [
                "Redshift"
            ]
        }
    }
}

const quadReducer = (acc, quadName) =>
    Object.keys(quadrants[quadName].rings).reduce(ringReducer(quadName), acc)

const ringReducer = (quadName) => (acc, ringName) =>
    acc.concat(quadrants[quadName].rings[ringName]
        .map(labelMapper(quadName, ringName)))


const labelMapper =  (quadName, ringName) => (label) => {
    let ringNumber = Object.keys(quadrants[quadName].rings).indexOf(ringName)
    let quadNumber = quadrants[quadName].quadrant
    return {"quadrant": quadNumber, "ring": ringNumber,
        label: label, active: false, moved: 0}
}

const data = Object.keys(quadrants).reduce(quadReducer, [])
