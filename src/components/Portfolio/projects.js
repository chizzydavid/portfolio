import netflixImg from '../../assets/images/banner_two.png';

const skills = {
  javascript: 'Javascript',
  react: 'React',
  flutter: 'Flutter',
  dart: 'Dart',
  postgres: 'Postgres',
  redux: 'Redux',
  nest: 'NestJS',
  graphql: 'GraphQL',
  apollo: 'Apollo',
  typeorm: 'TypeORM',
  express: 'ExpressJs',
  heroku: 'Heroku',
  bloc: 'BLoC Architecture',
  auth0: 'Auth0',
  docker: 'Docker',
  docker_compose: 'Docker Compose',
  node: 'NodeJs',
  kubernetes: 'Kubernetes',
  netlify: 'Netlify',
  python: 'Python',
  git: 'Git',
  firebase: 'Firebase',
  ansible: 'Ansible',
  es6: 'ES6+',
  typescript: 'Typescript',
  material: 'Material UI',
  styled: 'Styled Components',
  mocha: 'Mocha & Chai',
  tailwind: 'Tailwind CSS',
  redis: 'Redis',
  circleci: 'CircleCI',
  aws: 'AWS',
  aws_cli: 'AWS CLI',
  prometheus: 'Prometheus',
  cloudformation: 'AWS CloudFormation',
  ec2: 'AWS EC2',
  ecr: 'AWS Elastic Container Registry',
  eks_full: 'AWS Kubernetes as a Service',
  eks: 'AWS EKS',
  bash: 'Bash Scripting',
  s3: 'AWS S3',
  cicd: 'CI/CD',
  cloudfront: 'CloudFront',
  iac: 'Infrastructure as Code',
  aws_lambda: 'AWS Lambda',
  iam: 'AWS IAM',
  aws_config: 'AWS Config',
  cron: 'Cron Scheduler',
  digital_ocean: 'Digital Ocean',
  linux: 'Linux',
  travis: 'Travis CI',
  alert_manager: 'Alert Manager',
  stripe: 'Stripe'
}


const allProjects = [
  { 
  name: "Netflix Clone",
    description: "Browse through several categories of your favourite TV shows, Movies and Documentaries, view detailed information and watch their trailers",
    appUrl: "https://netflix-clone-d79ae.web.app/",
    githubUrl: "https://github.com/chizzydavid/netflix-clone",
    image: {netflixImg},
    category: 'frontend',
    skills: [skills.react, skills.material, skills.redux, skills.firebase, skills.javascript, skills.es6]
  },
  { 
    name: "S3Bucket Remediation",
    description: "A cloud project that routinely checks for non-compliant(public) s3 buckets in an AWS account using Config rules, and updates them to compliant status using Lambda functions",
    githubUrl: "https://gitlab.com/chizzydavid/s3_bucket_remediation",
    image: {netflixImg},
    category: 'cloud',
    skills: [skills.aws_lambda, skills.ec2, skills.bash, skills.iac, skills.python, skills.aws_config]
  },    
  { 
    name: "Ready Rides",
    description: "A demo web application allowing authenticated users choose and rent automobile vehicles within specified time periods and locations",
    appUrl: "https://ready-rides.netlify.app/",
    githubUrl: "https://github.com/chizzydavid/ready-rides",
    image: {netflixImg},
    category: 'frontend',
    skills: [skills.react, skills.typescript, skills.styled, skills.apollo, skills.graphql, skills.docker, skills.redux, skills.netlify]
  },
  // { 
  //   name: "Crowdly",
  //   description: "A fun and innovative platform for sending and receiving mails lorem ipsum dolor I need enough data to find these guys out",
  //   appUrl: "https://ready-rides.netlify.app/",
  //   githubUrl: "https://github.com/chizzydavid/ready-rides",
  //   image: {netflixImg},
  //   category: 'frontend',
  //   skills: [skills.react, skills.typescript, skills.apollo, skills.graphql, skills.docker, skills.redux, skills.tailwind, skills.netlify]
  // },
  // { 
  //   name: "Crowdly API",
  //   description: "A fun and innovative platform for sending and receiving mails lorem ipsum dolor I need enough data to find these guys out",
  //   githubUrl: "https://github.com/chizzydavid/ready-rides-api",
  //   image: {netflixImg},
  //   category: 'backend',
  //   skills: [skills.node, skills.typescript, skills.postgres, skills.docker, skills.redis, skills.typeorm, skills.graphql, skills.digital_ocean]
  // },
  { 
    name: "Mail Hive",
    description: "A fun and innovative platform for sending and receiving mails. Users can create groups, add memebers and send broadcast messages as well",
    appUrl: "https://chizzydavid.github.io/epic-mail/UI/index.html",
    githubUrl: "https://github.com/chizzydavid/epic-mail",
    image: {netflixImg},
    category: 'frontend',
    skills: [skills.javascript, skills.es6, skills.react, skills.redux, skills.material, skills.heroku]
  },  
  { 
    name: "Rich Follower",
    description: "A mobile application where subscribers can play trivia quizes about their favourite celebrities and compete with others under several categories.",
    playUrl: "https://play.google.com/store/apps/details?id=com.auth0.richfollowermobileapp",
    image: {netflixImg},
    category: 'mobile',
    skills: [skills.flutter, skills.dart, skills.bloc, skills.auth0, skills.stripe]
  },
  { 
    name: "Ready Rides API",
    description: "API Endpoints for a rides rental platform, built using GraphQL, NestJS and Docker",
    githubUrl: "https://github.com/chizzydavid/ready-rides-api",
    image: {netflixImg},
    category: 'backend',
    skills: [skills.node, skills.typescript, skills.postgres, skills.docker, skills.graphql, skills.nest, skills.typeorm, skills.digital_ocean]
  },
  { 
    name: "UdaGram",
    description: "Automate the creation of cloud resources including LoadBalancers, Auto-scaling groups and EC2 instances in different availability zones using AWS Cloudformation",
    githubUrl: "https://github.com/chizzydavid/udagram-infrastructure/",
    image: {netflixImg},
    category: 'cloud',
    skills: [skills.cloudformation, skills.aws_cli, skills.ec2, skills.bash, skills.iac]
  },
  { 
    name: "Exchange Rate Cronjob",
    description: "A Cron Scheduler routinely runs a python script that polls exchange rate information, stores them in a JSON file and uploads to an S3 bucket",
    githubUrl: "https://gitlab.com/chizzydavid/exchange_rate_api_job",
    image: {netflixImg},
    category: 'cloud',
    skills: [skills.ec2, skills.aws, skills.cron, skills.s3, skills.bash, skills.python]
  },
  { 
    name: "UdaPeople",
    description: `Utilized deployment strategies to design a CI/CD pipeline that implements linting, smoke tests and deployment to cloud based servers. Prometheus is configured to handle monitoring and logging`,
    githubUrl: "https://github.com/chizzydavid/udacity-udapeople",
    image: {netflixImg},
    category: 'cloud',
    skills: [skills.circleci, skills.aws_cli,skills.cloudformation, skills.ansible, skills.prometheus, skills.alert_manager]
  },
  {
    name: "Machine Learning Microservice",
    description: `Docker is used to containerize a Machine Learning API; a Kubernetes cluster is configured to automate the management and deployment of these containers`,
    githubUrl: "https://github.com/chizzydavid/ml_microservices_kubernetes",
    image: {netflixImg},
    category: 'cloud',
    skills: [skills.kubernetes, skills.python, skills.bash, skills.circleci, skills.linux, skills.docker, skills.eks_full]
  },
  { 
    name: "Mail Hive API",
    description: "Node & Express server side app responsible for authenticating users; storing and managing user's messages used to implement personal and group messaging",
    githubUrl: "https://github.com/chizzydavid/epic-mail",
    image: {netflixImg},
    category: 'backend',
    skills: [skills.node, skills.postgres, skills.mocha, skills.javascript, skills.heroku, skills.express, skills.travis]
  },
  { 
    name: "Todo.io",
    description: `AWS Elastic Kubernetes Service is used to deploy a fullstack javascript app, docker containers are pulled from AWS ECR while CircleCI and Ansible are used as CI and remote configuration tools`,
    githubUrl: "https://github.com/chizzydavid/todo.io",
    image: {netflixImg},
    category: 'cloud',
    skills: [skills.javascript, skills.react, skills.eks, skills.docker, skills.ecr, skills.bash]
  }
];

export default allProjects;

