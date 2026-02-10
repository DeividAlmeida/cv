import "./App.css";
import { CoffeeOutlined, IdcardFilled, MessageOutlined, RocketOutlined, ThunderboltFilled } from '@ant-design/icons';
import { Timeline, Flex, Row, Col } from 'antd';

function App() {
  return (
    <>
      <Row>
        <Col span={24}>
        <center style={{
            width: '100%',
          }}>
            <p>
              <h1>Deivid Almeida</h1>
              <h3>Desenvolvedor Engenheiro de Software</h3>
            </p>
          </center>
        </Col>
      </Row>
      <Flex style={
          {
            width: '100%',
            height: 'auto',
            marginTop: '20px',
          }
        } 
      >
        <Row 
          gutter={[16, 16]} 
          wrap={false} 
          justify={"space-between"}
        >
          <Col span={8}>
            <Timeline
              mode={"left"}
              items={[
                {
                  dot: <MessageOutlined className="timeline-clock-icon" style={{
                    fontSize: '30px',
                    backgroundColor: '#003D74',
                    color: 'white',
                    borderRadius: '50%',
                  }}/>,
                  color: 'red',
                  children: <h2 style={{
                    color: '#003D74',
                    fontWeight: 'bold',
                    marginLeft: '10px',
                  }}>{'Resumo profissional'}</h2>,
                },
                {
                  color: '#003D74',
                  children: (
                    <p style={{marginRight: "10vh"}}>
                      Com mais de 6 anos de experiência, contribuo direta e indiretamente para o desenvolvimento e aprimoramento de sistemas que atendem a mais de 30 negócios, com alto fluxo de acessos diários. Atuo com tecnologias como <b> Node.js, Express.js, PHP/Laravel, React.js, Angular, Vue.js, PostgreSQL, MongoDB, Docker e AWS.  </b>
                    </p>
                  ),
                },
                {
                  dot: <CoffeeOutlined className="timeline-clock-icon" style={{
                    fontSize: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#003D74',
                    color: 'white',
                  }}/>,
                  children: <h2 style={{
                    fontWeight: 'bold',
                    marginLeft: '10px',
                  }}>{'Experiencias profissionais'}</h2>,
                },
                {
                  label: '2025-01 - atualmente',
                  color: '#003D74',
                  children: (
                    <div>
                      <h3>Engenheiro de Software</h3>
                      <i>Fully Ecosystem, Remoto</i>
                      <p>
                        <ul>
                          <li style={{marginRight: "10vh"}}>Trabalho no desenvolvimento e manutenção de microsserviços usando NestJS e Spring Boot no Backend e bancos de dados como MongoDB e PostgreSQL.</li>
                          <li>Participo ativamente de cerimônias do Scrum, incluindo sessões de planejamento e revisões de código.</li>
                          <li>Desenvolvimento de aggregation pipelines complexos, otimização de queries, criação de índices e melhoria de performance para grandes volumes de dados</li>
                          <li>Implementação de cache para otimização de performance, redução de carga no banco de dados e melhoria do tempo de resposta das APIs</li>
                          <li>Aplicação de transações de banco de dados seguindo princípios ACID para garantir consistência, integridade e confiabilidade em sistemas críticos.</li>
                          <li>Desenvolvimento de testes automatizados seguindo Test-Driven Development para garantir qualidade, confiabilidade e manutenibilidade do código.</li>
                          <li>Dou suporte a desenvolvedores juniores, contribuo com a análise e resolução de bugs e utilizo a AWS CloudWatch para monitoramento e observabilidade de nossos microsserviços.</li>
                        </ul>
                      </p>
                      <b>Tecnologias usadas:</b>
                      <p>
                        <ul>
                          <li>NestJs</li>
                          <li>Kotlin</li>
                          <li>Spring Boot</li>
                          <li>Jest</li> 
                          <li>MongoDB (Aggregation Pipelines)</li>
                          <li>PostgreSQL (Indexing | Query Tuning) </li>
                          <li>AWS ECS</li>
                          <li>AWS Route 53</li> 
                          <li>AWS CloudWatch</li> 
                          <li>AWS RDS</li>
                          <li>Jenkins</li> 
                          <li>Redis</li> 
                          <li>TypeScript</li>
                          <li>TypeORM</li>
                          <li>Git</li>
                        </ul>
                      </p>
                    </div>
                  ),
                },
                {
                  label: '2023-09 - 2025-01',
                  color: '#003D74',
                  children: (
                    <div>
                      <h3>DevOps</h3>
                      <i>Evoy, Remoto</i>
                      <p>
                        <ul>
                          <li style={{marginRight: "10vh"}}>Responsável por todo o processo de desenvolvimento, manutenção, monitoramento e suporte das plataformas de gestão de ativos da Evoy.</li>
                        </ul>
                      </p>
                      <b>Tecnologias usadas:</b>
                      <p>
                        <ul>
                          <li>AWS S3</li> 
                          <li>AWS Lambda</li> 
                          <li>AWS EC2</li> 
                          <li>AWS CodeCommit</li> 
                          <li>AWS CodeBuild</li> 
                          <li>AWS CodeDeploy</li> 
                          <li>AWS CodePipeline</li> 
                          <li>AWS CloudFront</li> 
                          <li>AWS CloudWatch</li> 
                          <li>AWS Elastic Beanstalk</li> 
                          <li>AWS IAM (Identity and Access Management)</li> 
                          <li>AWS Route 53</li>
                          <li>Git</li>
                        </ul>
                      </p>
                    </div>
                  ),
                },
                {
                  label: '2022-09 - 2023-09',
                  color: '#003D74',
                  children: (
                    <div>
                      <h3>Desenvolvedor Full Stack</h3>
                      <i>Evoy, Remoto</i>
                      <p>
                        <ul>
                          <li>Levantamento dos requisitos de softwares, buscando entender as necessidades operacionais dos clientes para projetar programas que realizassem atividades e comandos específicos.</li>
                          <li>Refatoração de códigos-fonte existentes, realizando as correções necessárias em decorrência do surgimento de falhas e novos requisitos, sem alterar as funcionalidades do software.</li>
                          <li>Responsável pelo desenvolvimento back-end de uma aplicação web, criando códigos que possibilitassem que as funções de sites e aplicativos pudessem ser executadas.</li>
                          <li>Implementação de cache para otimização de performance, redução de carga no banco de dados e melhoria do tempo de resposta das APIs</li>
                          <li>Desenvolvimento front-end de aplicações web, elaborando a interface de páginas.</li>
                          <li>Desenvolvimento de aggregation pipelines complexos, otimização de queries, criação de índices e melhoria de performance para grandes volumes de dados</li>
                          <li>Desenvolvimento de testes automatizados seguindo Test-Driven Development para garantir qualidade, confiabilidade e manutenibilidade do código.</li>
                          <li>Utilização de sistemas de controle de versão para gerir arquivos de projetos armazenados em repositórios, monitorando registros e alterações em códigos-fonte de projetos de software.</li>
                        </ul>
                      </p>
                      <b>Tecnologias usadas:</b>
                      <p>
                        <ul>
                          <li>NodeJS</li>
                          <li>TypeScript</li>
                          <li>ReactJS</li>
                          <li>React Native</li>
                          <li>Angular +2</li>
                          <li>Express</li>
                          <li>Jest</li>
                          <li>MongoDB (Aggregation Pipelines)</li>
                          <li>PostgreSQL (Indexing | Query Tuning)</li>
                          <li>Redis</li>
                          <li>Git</li>
                        </ul>
                      </p>
                    </div>
                  ),
                },
                {
                  label: '2022-04 - 2022-09',
                  color: '#003D74',
                  children: (
                    <div>
                      <h3>Desenvolvedor Full Stack (Freelancer)</h3>
                      <i>NextGo, Remoto</i>
                      <p>
                        <ul>
                          <li>Levantamento dos requisitos de softwares, buscando entender as necessidades operacionais dos clientes para projetar programas que realizassem atividades e comandos específicos.</li>
                          <li>Refatoração de códigos-fonte existentes, realizando as correções necessárias em decorrência do surgimento de falhas e novos requisitos, sem alterar as funcionalidades do software.</li>
                          <li>Responsável pelo desenvolvimento back-end de uma aplicação web, criando códigos que possibilitassem que as funções de sites e aplicativos pudessem ser executadas.</li>
                          <li>Desenvolvimento front-end de aplicações web, elaborando a interface de páginas.</li>
                          <li>Otimização de queries, criação de índices e melhoria de performance para grandes volumes de dados</li>
                          <li>Utilização de sistemas de controle de versão para gerir arquivos de projetos armazenados em repositórios, monitorando registros e alterações em códigos-fonte de projetos de software.</li>
                        </ul>
                      </p>
                      <b>Tecnologias usadas:</b>
                      <p>
                        <ul>
                          <li>Angular +2</li>
                          <li>NodeJS</li>
                          <li>TypeScript</li>
                          <li>Express</li>
                          <li>PostgreSQL (Indexing | Query Tuning)</li>
                          <li>Git</li>
                        </ul>
                      </p>
                    </div>
                  ),
                },
                {
                  label: '2022-02 - 2022-04',
                  color: '#003D74',
                  children: (
                    <div>
                      <h3>Desenvolvedor Full Stack (Freelancer)</h3>
                      <i>Come Come Delivery, Remoto</i>
                      <p>
                        <ul>
                          <li>Levantamento dos requisitos de softwares, buscando entender as necessidades operacionais dos clientes para projetar programas que realizassem atividades e comandos específicos.</li>
                          <li>Refatoração de códigos-fonte existentes, realizando as correções necessárias em decorrência do surgimento de falhas e novos requisitos, sem alterar as funcionalidades do software.</li>
                          <li>Responsável pelo desenvolvimento back-end de uma aplicação web, criando códigos que possibilitassem que as funções de sites e aplicativos pudessem ser executadas.</li>
                          <li>Desenvolvimento front-end de aplicações web, elaborando a interface de páginas.</li>
                          <li>Otimização de queries, criação de índices e melhoria de performance para grandes volumes de dados</li>
                          <li>Utilização de sistemas de controle de versão para gerir arquivos de projetos armazenados em repositórios, monitorando registros e alterações em códigos-fonte de projetos de software.</li>
                        </ul>
                      </p>
                      <b>Tecnologias usadas:</b>
                      <p>
                        <ul>
                          <li>Laravel</li>
                          <li>JavaScript ES6</li>
                          <li>PHP</li>
                          <li>MySQL (Indexing | Query Tuning)</li>
                          <li>Git</li>
                        </ul>
                      </p>
                    </div>
                  ),
                },
                {
                  label: '2021-12 - 2022-02',
                  color: '#003D74',
                  children: (
                    <div>
                      <h3>Desenvolvedor Full Stack (Freelancer)</h3>
                      <i>RE9WEB Soluções, Remoto</i>
                      <p>
                        <ul>
                          <li>Levantamento dos requisitos de softwares, buscando entender as necessidades operacionais dos clientes para projetar programas que realizassem atividades e comandos específicos.</li>
                          <li>Refatoração de códigos-fonte existentes, realizando as correções necessárias em decorrência do surgimento de falhas e novos requisitos, sem alterar as funcionalidades do software.</li>
                          <li>Responsável pelo desenvolvimento back-end de uma aplicação web, criando códigos que possibilitassem que as funções de sites e aplicativos pudessem ser executadas.</li>
                          <li>Desenvolvimento front-end de aplicações web, elaborando a interface de páginas.</li>
                          <li>Otimização de queries, criação de índices e melhoria de performance para grandes volumes de dados</li>
                          <li>Utilização de sistemas de controle de versão para gerir arquivos de projetos armazenados em repositórios, monitorando registros e alterações em códigos-fonte de projetos de software.</li>
                        </ul>
                      </p>
                      <b>Tecnologias usadas:</b>
                      <p>
                        <ul>
                          <li>Vue.js</li>
                          <li>PHP</li>
                          <li>MySQL (Indexing | Query Tuning)</li>
                          <li>Git</li>
                        </ul>
                      </p>
                    </div>
                  ),
                },
                {
                  label: '2020-01 - 2021-11',
                  color: '#003D74',
                  children: (
                    <div>
                      <h3>Desenvolvedor Full Stack</h3>
                      <i>Wacontrol, Remoto</i>
                      <p>
                        <ul>
                          <li>Levantamento dos requisitos de softwares, buscando entender as necessidades operacionais dos clientes para projetar programas que realizassem atividades e comandos específicos.</li>
                          <li>Refatoração de códigos-fonte existentes, realizando as correções necessárias em decorrência do surgimento de falhas e novos requisitos, sem alterar as funcionalidades do software.</li>
                          <li>Responsável pelo desenvolvimento back-end de uma aplicação web, criando códigos que possibilitassem que as funções de sites e aplicativos pudessem ser executadas.</li>
                          <li>Desenvolvimento front-end de aplicações web, elaborando a interface de páginas.</li>
                          <li>Otimização de queries, criação de índices e melhoria de performance para grandes volumes de dados</li>
                          <li>Utilização de sistemas de controle de versão para gerir arquivos de projetos armazenados em repositórios, monitorando registros e alterações em códigos-fonte de projetos de software.</li>
                        </ul>
                      </p>
                      <b>Tecnologias usadas:</b>
                      <p>
                        <ul>
                          <li>Vue.js</li>
                          <li>Express.js</li>
                          <li>Node.js</li>
                          <li>MySQL (Indexing | Query Tuning)</li>
                          <li>Git</li>
                        </ul>
                      </p>
                    </div>
                  ),
                },
                {
                  label: '2017-02 - 2020-01',
                  color: '#003D74',
                  children: (
                    <div>
                      <h3>Assistente de TI</h3>
                      <i>Lipari Mineração Ltda, Nordestina-BA</i>
                      <p>
                        <ul>
                          <li>Instalar e atualizar sistemas operacionais e aplicativos.</li>
                          <li>Suporte em implementação de novas tecnologias</li>
                          <li>Modelagem de dados e desenvolvimento de software para automatização de processos.</li>
                        </ul>
                      </p>
                      <b>Tecnologias usadas:</b>
                      <p>
                        <ul>
                          <li>JavaScript</li>
                          <li>PHP</li>
                          <li>MySQL</li>
                          <li>Excel</li>
                        </ul>
                      </p>
                    </div>
                  ),
                },
                {
                  label: '2013-01 - 2014-12',
                  color: '#003D74',
                  children: (
                    <div>
                      <h3>Professor de inglês</h3>
                      <i>Prefeitura de Quijingue, Quijingue-BA</i>
                      <p>
                        <ul>
                          <li>Planejamento e aplicação de atividades dinâmicas voltadas à prática de conversação, visando o desenvolvimento das competências orais ao simular situações reais de uso da língua.</li>
                          <li>Preparo e ministramento de aulas presenciais de acordo com a faixa etária dos alunos, adaptando o conteúdo ao nível de proficiência na língua, seguindo a metodologia da escola.</li>
                        </ul>
                      </p>
                    </div>
                  ),
                },
                {
                  dot: <RocketOutlined  className="timeline-clock-icon" style={{
                    fontSize: '30px',
                    backgroundColor: '#003D74',
                    color: 'white',
                    borderRadius: '50%',
                  }}/>,
                  children: <h2 style={{
                    fontWeight: 'bold',
                    marginLeft: '10px',
                  }}>{'Educação'}</h2>,
                },
                {
                  label: '2022-03 - atualmente',
                  color: '#003D74',
                  children: (
                    <div>
                      <h3>Engenharia da Computação, Bacharelado</h3>
                      <p>
                        <ul>
                          <li>UNINTER Centro Universitário Internacional, Serrinha-BA</li>
                        </ul>
                      </p>
                    </div>
                  ),
                },
                {
                  label: '2017-01 - 2019-01',
                  color: '#003D74',
                  children: (
                    <div>
                      <h3>Recursos Humanos, tecnólogico</h3>
                      <p>
                        <ul>
                          <li>UNINTER Centro Universitário Internacional, Cansanção-BA</li>
                        </ul>
                      </p>
                    </div>
                  ),
                },
                {
                  label: '2011-03 - 2013-08',
                  color: '#003D74',
                  children: (
                    <div>
                      <h3>Língua Inglesa e Literaturas de Língua Inglesa, Curso</h3>
                      <p>
                        <ul>
                          <li>EF Executive Language Institute , Online</li>
                        </ul>
                      </p>
                    </div>
                  ),
                },
              ]}
            />
          </Col>
          <Col span={8} style={{
            textAlign: 'start',
          }}>
            <p>
              <h2>
                <center style={{
                  width: '28vh',
                }}>
                  <ThunderboltFilled /> Competências
                </center>
              </h2>
              <p>
                <ul className="skills">
                  <li className="node">Node.js <span>6+ anos</span></li>
                  <li className="express">Express <span>6+ anos</span></li>
                  <li className="react">React <span>5+ anos</span></li>
                  <li className="mongodb">MongoDB <span>4+ anos</span></li>
                  <li className="postgresql">PostgreSQL <span>4+ anos</span></li>
                  <li className="aws">AWS <span>4+ anos</span></li>
                  <li className="angular">Angular <span>4+ anos</span></li>
                  <li className="mysql">MySQL <span>4+ anos</span></li>
                  <li className="php">PHP <span>4+ anos</span></li>
                  <li className="redis">Redis <span>3+ anos</span></li>
                  <li className="jest">Jest <span>3+ anos</span></li>
                  <li className="laravel">Laravel <span>3+ anos</span></li>
                  <li className="vue">Vue <span>3+ anos</span></li>
                </ul>
              </p>
            </p>
            <br/>
            <p className="profile">
              <h2>
                <center style={{
                  width: '28vh',
                }}>
                  <IdcardFilled /> Perfil
                </center>
              </h2>
              <h3>
                E-mail
              </h3>
              <span>
                mr.55davi@gmail.com
              </span>
              <h3>
                Telefone
              </h3>
              <span>
              +55 (75) 9 9258-1723
              </span>
              <h3>
                Linkedin
              </h3>
              <span>
                <a href="https://www.linkedin.com/in/deivid-almeida/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/deivid-almeida/</a>
              </span>
              <h3>
                GitHub
              </h3>
              <span>
                <a href="https://github.com/DeividAlmeida" target="_blank" rel="noreferrer">https://github.com/DeividAlmeida</a>
              </span>              
            </p>
          </Col>
        </Row>
      </Flex>
    </>
  )
}

export default App
