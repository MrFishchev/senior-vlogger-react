import React from 'react'
import './AboutMe.sass'

import { ReactComponent as ScaleIcon } from './icons/scale.svg'
import { ReactComponent as CleanIcon } from './icons/clean.svg'
import { ReactComponent as SpeedIcon } from './icons/speed.svg'
import { ReactComponent as ResponsiveIcon } from './icons/responsive.svg'

const AboutMe: React.FC = () => {
  return (
    <div className="about-me wrapper container-fluid">
      <div className="content">
        {/* About */}
        <div className="block about">
          <h1>About</h1>
          <div className="container">
            <div className="best-options slide-in-left">
              <div className="option">
                <ScaleIcon />
                <div className="title">Scalability</div>
                <div className="desc">
                  Use SOLID principles and Clean Architecture
                </div>
              </div>
              <div className="option">
                <CleanIcon />
                <div className="title">Readability</div>
                <div className="desc">Beautiful and readable code</div>
              </div>
              <div className="option">
                <SpeedIcon />
                <div className="title">Availability</div>
                <div className="desc">Fast loading and low latency</div>
              </div>
              <div className="option">
                <ResponsiveIcon />
                <div className="title">Cross-platform</div>
                <div className="desc">Any devices supported</div>
              </div>
            </div>

            {/* Skills */}
            <div className="skills slide-in-right">
              <div className="skill-bars">
                <div className="bar">
                  <div className="fill" style={{ width: '90%' }}>
                    <div className="tag">
                      <span>.NET</span>
                    </div>
                  </div>
                  <span>90%</span>
                </div>

                <div className="bar">
                  <div className="fill" style={{ width: '70%' }}>
                    <div className="tag">
                      <span>TypeScript</span>
                    </div>
                  </div>
                  <span>70%</span>
                </div>

                <div className="bar">
                  <div className="fill" style={{ width: '75%' }}>
                    <div className="tag">
                      <span>Architecture</span>
                    </div>
                  </div>
                  <span>75%</span>
                </div>

                <div className="bar">
                  <div className="fill" style={{ width: '99%' }}>
                    <div className="tag">
                      <span>Docker</span>
                    </div>
                  </div>
                  <span>99%</span>
                </div>

                <div className="bar">
                  <div className="fill" style={{ width: '60%' }}>
                    <div className="tag">
                      <span>AWS</span>
                    </div>
                  </div>
                  <span>60%</span>
                </div>

                <div className="bar">
                  <div className="fill" style={{ width: '90%' }}>
                    <div className="tag">
                      <span>Vue.js</span>
                    </div>
                  </div>
                  <span>90%</span>
                </div>

                <div className="bar">
                  <div className="fill" style={{ width: '80%' }}>
                    <div className="tag">
                      <span>React</span>
                    </div>
                  </div>
                  <span>80%</span>
                </div>
              </div>

              <div className="additional appears-fade-in">
                <p>
                  <span>Backend:</span> .NET, EntityFramework, Multitenancy,
                  MassTransit, MediatR, SAGA, Autofac, Quartz, IdentityServer,
                  System.IO.Pipelines, gRPC, REST, Benchmark, Profiling
                </p>
                <p>
                  <span>Infrastructure:</span> Docker, Kubernetes, MSSQL,
                  MongoDB, Redis, RabbitMQ, Grafana, Prometheus, ElasticSearch
                </p>
                <p>
                  <span>AWS:</span> ECS, CloudFormation, CDK, DynamoDB, Aurora,
                  EC2, ELB, Lambda, SQS, CloudWatch, AnomalyDetection, SSM, S3,
                  IAM
                </p>
                <p>
                  <span>Frontend:</span> Vue.js, Nuxt.js, React, Redux, MUI,
                  styled-components, React Hook Form, Jest, GraphQL, SSR,
                  WebSockets, SSE
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Skills */}
        {/* End About */}

        {/* Contact */}
        <div className="block contact">
          <h1>Contact</h1>
          <div className="container">
            <div className="whoami">
              <div className="img" />
              <div className="title">
                Aleksei Fishchev
                <br />
              </div>
              <div className="desc">
                {`
                    Hi Friend! I'm a <strong>Senior Software Engineer</strong>.
                    Now I'm on my way to becoming a Software Architect. Let's make
                    the World a better place. If you want to know about me or
                    <strong>.NET</strong>, then welcome to my <a>blog</a>.
                 `}
              </div>
            </div>

            <div className="contact-form">
              <form>
                <input type="text" name="subject" placeholder="Subject" />
                <input type="email" name="email" placeholder="Email" />
                <textarea name="message" placeholder="Message" />
                <div className="remaining">Remaining message length</div>
                <button type="submit" className="btn w-100">
                  Go to know
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* End Contact */}
      </div>
    </div>
  )
}

export default AboutMe
