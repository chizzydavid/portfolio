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
  bloc: 'BLoC Architecture',
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
  circleci: 'Circle CI',
  aws: 'AWS',
  cloudformation: 'AWS CloudFormation',
  ec2: 'AWS EC2',
  ecr: 'AWS Elastic Container Registry',
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
  linux: 'Linux'
}


const allProjects = [
  { 
  name: "Netflix Clone",
    description: "Browse all your favourite TV shows, movies and Documentaries and watch their trailers.",
    appUrl: "https://netflix-clone-d79ae.web.app/",
    githubUrl: "https://github.com/chizzydavid/netflix-clone",
    image: {netflixImg},
    category: 'frontend',
    skills: [skills.react, skills.material, skills.redux, skills.firebase, skills.javascript, skills.es6]
  },
  { 
    name: "Ready Rides",
    description: "A fun and innovative platform for sending and receiving mails lorem ipsum dolor I need enough data to find these guys out",
    appUrl: "https://ready-rides.netlify.app/",
    githubUrl: "https://github.com/chizzydavid/ready-rides",
    image: {netflixImg},
    category: 'frontend',
    skills: [skills.react, skills.typescript, skills.styled, skills.apollo, skills.graphql, skills.docker, skills.redux, skills.netlify]
  },
  { 
    name: "Crowdly",
    description: "A fun and innovative platform for sending and receiving mails lorem ipsum dolor I need enough data to find these guys out",
    appUrl: "https://ready-rides.netlify.app/",
    githubUrl: "https://github.com/chizzydavid/ready-rides",
    image: {netflixImg},
    category: 'frontend',
    skills: [skills.react, skills.typescript, skills.apollo, skills.graphql, skills.docker, skills.redux, skills.tailwind, skills.netlify]
  },
  { 
    name: "Crowdly API",
    description: "A fun and innovative platform for sending and receiving mails lorem ipsum dolor I need enough data to find these guys out",
    githubUrl: "https://github.com/chizzydavid/ready-rides-api",
    image: {netflixImg},
    category: 'backend',
    skills: [skills.node, skills.typescript, skills.postgres, skills.docker, skills.redis, skills.typeorm, skills.graphql, skills.digital_ocean]
  },
  { 
    name: "Mail Hive",
    description: "A fun and innovative platform for sending and receiving mails lorem ipsum dolor I need enough data to find these guys out",
    appUrl: "https://chizzydavid.github.io/epic-mail/UI/index.html",
    githubUrl: "https://github.com/chizzydavid/epic-mail",
    image: {netflixImg},
    category: 'frontend',
    skills: [ skills.javascript, skills.es6, skills.react, skills.redux, skills.material]
  },  
  { 
    name: "Rich Follower",
    description: "A fun and innovative platform for sending and receiving mails lorem ipsum dolor I need enough data to find these guys out",
    playUrl: "https://play.google.com/store/apps/details?id=com.auth0.richfollowermobileapp",
    image: {netflixImg},
    category: 'mobile',
    skills: [skills.flutter, skills.dart, skills.bloc]
  },
  { 
    name: "Ready Rides API",
    description: "A fun and innovative platform for sending and receiving mails lorem ipsum dolor I need enough data to find these guys out",
    githubUrl: "https://github.com/chizzydavid/ready-rides-api",
    image: {netflixImg},
    category: 'backend',
    skills: [skills.node, skills.typescript, skills.postgres, skills.docker, skills.docker_compose, skills.nest, skills.typeorm, skills.graphql]
  },  
  { 
    name: "UdaGram",
    description: "A fun and innovative platform for sending and receiving mails lorem ipsum dolor I need enough data to find these guys out",
    githubUrl: "https://github.com/chizzydavid/udagram-infrastructure/",
    image: {netflixImg},
    category: 'cloud',
    skills: [skills.cloudformation, skills.ec2, skills.bash, skills.iac]
  },
  { 
    name: "S3 Bucket Remediation",
    description: "A fun and innovative platform for sending and receiving mails lorem ipsum dolor I need enough data to find these guys out",
    githubUrl: "https://gitlab.com/chizzydavid/s3_bucket_remediation",
    image: {netflixImg},
    category: 'cloud',
    skills: [skills.aws_lambda, skills.ec2, skills.bash, skills.iac, skills.python]
  },  
  { 
    name: "Exchange Rate Cron Job",
    description: "A fun and innovative platform for sending and receiving mails lorem ipsum dolor I need enough data to find these guys out",
    githubUrl: "https://gitlab.com/chizzydavid/exchange_rate_api_job",
    image: {netflixImg},
    category: 'cloud',
    skills: [skills.ec2, skills.aws, skills.cron, skills.s3, skills.bash, skills.python]
  },
  { 
    name: "UdaPeople",
    description: "A fun and innovative platform for sending and receiving mails lorem ipsum dolor I need enough data to find these guys out",
    githubUrl: "https://github.com/chizzydavid/udacity-udapeople",
    image: {netflixImg},
    category: 'cloud',
    skills: [skills.circleci, skills.ec2, skills.s3, skills.cloudformation, skills.cloudfront, skills.ansible]
  },
  { 
    name: "Machine Learning Microservice",
    description: "A fun and innovative platform for sending and receiving mails lorem ipsum dolor I need enough data to find these guys out",
    githubUrl: "https://github.com/chizzydavid/ml_microservices_kubernetes",
    image: {netflixImg},
    category: 'cloud',
    skills: [skills.kubernetes, skills.python, skills.bash, skills.circleci, skills.linux, skills.docker]
  },
  { 
    name: "Mail Hive API",
    description: "Browse your favourite Movies, TV shows and More lorem ipsum dolor I need enough data to find these guys out",
    githubUrl: "https://github.com/chizzydavid/epic-mail",
    image: {netflixImg},
    category: 'backend',
    skills: [skills.node, skills.postgres, skills.mocha, skills.javascript]
  },
  { 
    name: "Todo.io Kubernetes",
    description: "A fun and innovative platform for sending and receiving mails lorem ipsum dolor I need enough data to find these guys out",
    githubUrl: "https://github.com/chizzydavid/todo.io",
    image: {netflixImg},
    category: 'cloud',
    skills: [skills.kubernetes, skills.javascript, skills.react, skills.circleci, skills.docker, skills.ecr, skills.bash]
  }
];

export default allProjects;

