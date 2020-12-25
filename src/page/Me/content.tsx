import React from "react"
import { Icon, Item, Label, List } from "semantic-ui-react"

export const MeData = {
    name: "mudit sahni",
    profile: "software engineer",
    about: <div><p>In my near seven years of professional employment, I've had the opportunity to help build high-impact data centric products
    for organizations which are leaders in the domains of research advisory, and travel respectively. My work has helped enable, scale, and standardize
    online experimentation for a large e-commerce company with an average of <span className="highlighted-word">{">"}40,000 active A/B tests</span> running at any point,
    drive in <span className="highlighted-word">~$4.5 million of revenue</span> by creating web products for client-side survey analysis and benchmarking,
     and drive organization-wide research studies through the implementation of <span className="highlighted-word">machine learning models for quantitative and qualitative analysis</span> for a research company.</p>
        <p>I'm chasing ‘fluency’ in subjects I love. I try and use all my free time to read and learn about a wide
        variety of things—from the sciences to literature to history and culture—and all my work time trying to find ways in applying what I've learnt to build
        something useful. <span className="highlighted-word">I find myself extremely fortunate that what I find fun, entertaining, and fullfilling is also my profession.</span>
        </p>
    </div >
}

export const languages = [
    "Python",
    "Java",
    "Scala",
    "TypeScript",
    "JavaScript",
    "SQL",
    "C++",
    "R"
]
export const languageRatings = [
    { icon: "python.png", title: "Python", rating: 5, popup: "The language which made me re-discover programming in the right way. My true love." },
    { icon: "java.svg", title: "Java", rating: 4, popup: "Kept dissing it as cliche and boring till I had to write a bunch of spark jobs in it. Not bad at all. Enjoy it quite a bit now." },
    { icon: "scala.svg", title: "Scala", rating: 4, popup: "What's not to like about this beauty. More powerful than Java, and a very pythonic syntax. My new favorite." },
    { icon: "typescript.svg", title: "TypeScript", rating: 4, popup: "Why anyone would use vanilla JS when this magnificent beast is out there is beyond me." },
    {
        icon: "javascript.svg", title: "JavaScript", rating: 4, popup: "A language I never wanted to use but of course, in a world where everything is JS, I was forced to. " +
            "It's not as bad as I thought but it doesnt feel like I'm programming. Don't hate me."
    },
    { icon: "sql.png", title: "SQL", rating: 3, popup: "Because of course ?" },
    {
        icon: "c.svg", title: "C++", rating: 2, popup: "My unattainable mountain. The language I want to dig deeper into but seldom have any opportunities to do so. " +
            "It makes me feel like a real programmer."
    },
    {
        icon: "r.png", title: "R", rating: 2, popup: "Suprisingly (or not so much), a language I used before Python in my data analytics projects. " +
            "Then I got to know it better...sober since 2016."
    }

]

export const certificateData = [
    { title: "AI for Medical Diagnosis", id: "June 2020", link: "https://coursera.org/share/c5164032356c1ac8fc5fdf11a2e9fc65" },
    { title: "Introduction to TensorFlow", id: "December 2019", link: "https://www.coursera.org/account/accomplishments/verify/VAJDV6UKRY92" },
    { title: "Deep Learning Nanodegree", id: "January 2019", link: "https://confirm.udacity.com/M9G9K69J" },
    { title: "Deep Learning Specialization", id: "September 2018", link: "https://www.coursera.org/account/accomplishments/specialization/GGBBEPHV7S64" },
    { title: "Sequence Models", id: "September 2018", link: "https://www.coursera.org/account/accomplishments/verify/UYJLH6VCCEYX" },
    { title: "Convolutional Neural Networks", id: "June 2018", link: "https://www.coursera.org/account/accomplishments/verify/8GBAQPGMR22W" },
    { title: "Structuring Machine Learning Projects", id: "April 2018", link: "https://www.coursera.org/account/accomplishments/verify/8247X9YWF7R7" },
    { title: "Improving Deep Neural Networks", id: "March 2018", link: "https://www.coursera.org/account/accomplishments/verify/BQXBLLU9L5DH" },
    { title: "Neural Networks and Deep Learning", id: "February 2018", link: "https://www.coursera.org/account/accomplishments/verify/8ZRALDZMK6HH" },
    { title: "Machine Learning by Stanford University", id: "January 2018", link: "https://www.coursera.org/account/accomplishments/verify/3YQMLACKFMLB" },
]
export const certificates = [
    { title: "AI for Medical Diagnosis", subtitle: "June 2020", link: "https://coursera.org/share/c5164032356c1ac8fc5fdf11a2e9fc65" },
    { title: "Introduction to TensorFlow", subtitle: "December 2019", link: "https://www.coursera.org/account/accomplishments/verify/VAJDV6UKRY92" },
    { title: "Deep Learning Nanodegree", subtitle: "January 2019", link: "https://confirm.udacity.com/M9G9K69J" },
    { title: "Deep Learning Specialization", subtitle: "September 2018", link: "https://www.coursera.org/account/accomplishments/specialization/GGBBEPHV7S64" },
    { title: "Sequence Models", subtitle: "September 2018", link: "https://www.coursera.org/account/accomplishments/verify/UYJLH6VCCEYX" },
    { title: "Convolutional Neural Networks", subtitle: "June 2018", link: "https://www.coursera.org/account/accomplishments/verify/8GBAQPGMR22W" },
    { title: "Structuring Machine Learning Projects", subtitle: "April 2018", link: "https://www.coursera.org/account/accomplishments/verify/8247X9YWF7R7" },
    { title: "Improving Deep Neural Networks", subtitle: "March 2018", link: "https://www.coursera.org/account/accomplishments/verify/BQXBLLU9L5DH" },
    { title: "Neural Networks and Deep Learning", subtitle: "February 2018", link: "https://www.coursera.org/account/accomplishments/verify/8ZRALDZMK6HH" },
    { title: "Machine Learning by Stanford University", subtitle: "January 2018", link: "https://www.coursera.org/account/accomplishments/verify/3YQMLACKFMLB" },
]


export const projectsData = [
    { title: "Sorting Visualisation", subtitle: "August 2020", link: "#" },
    { title: "Path Fingind Visualisation", subtitle: "August 2020", link: "#" },
    { title: "Image detection Deep Learning Model", subtitle: "", link: "#" }
]
export const frameworkRatings = [
    { icon: "pandas.svg", title: "Pandas", rating: 5 },
    { icon: "react.png", title: "React", rating: 4 },
    { icon: "tensorflow.png", title: "Tensorflow", rating: 4 },
    { icon: "spark.png", title: "Spark", rating: 3 },
    { icon: "graphql.png", title: "GraphQL", rating: 3 },
    { icon: "pytorch.png", title: "PyTorch", rating: 2 },
    { icon: "flask.svg", title: "Flask", rating: 2 },

]

export const frameworks = [
    "Pandas",
    "ReactJS",
    "TensorFlow",
    "Apache Spark",
    "GraphQL",
    "PyTorch",
    "Flask",
    "AWS",
    "Azure",
    "SQL",
    "NoSQL"
]

export const tags = [
    "Machine Learning",
    "Deep Learning",
    "Product",
    "Full Stack Development",
    "A/B Testing",
    "Convolutional Neural Networks",
    "Residual Neural Networks",
    "Generative Adversarial Networks",
    "Data Analysis",
    "Data Engineering",
    "Statistics",
    "Visualization",
    "Automation",
    "Artificial Neural Networks",
    "Big Data",
    "Simulation",
    "Back-end Development",
    "Font-end Development"
]

export const schoolPanel = {
    key: "modern",
    title: "school",
    data: [
        {
            positions: [
                {
                    key: "school",
                    role: "Modern School, Barakhamba Road",
                    date: "1996-2009",
                    team: "Modern School, Barakhamba Road",
                    active: false
                }
            ],
            content: <div></div>
        }
    ]
}


export const universityPanel = {
    key: "amity",
    title: "engineering",
    data: [
        {
            positions: [
                {
                    key: "btechIT",
                    role: "Bachelor of Technology, Information Technology",
                    date: "2009-2013",
                    team: "Amity University, Noida, UP, India",
                    active: false
                }
            ],
            content: <div></div>
        }
    ]
}

export const techmahindraExperience = {
    key: "techMahindra",
    title: "tech mahindra",
    data: [
        {
            positions: [
                {
                    key: "intern",
                    role: "Intern",
                    date: "May 2012—July 2012",
                    team: "E-Commerce Development (Government)",
                    active: false
                }
            ],
            content: <div></div>
        }
    ]
}

export const gartnerExperience = {
    key: "gartner",
    title: "gartner",
    data: [
        {
            positions: [
                {
                    key: "qrs",
                    role: "Quantitative Research Specialist",
                    date: "Mar 2017—Oct 2017",
                    team: "Quantitative Research and Analysis",
                    active: false
                }
            ],
            content: <div>

                <em>
                    Overhauled the client-facing data reporting and visualization products for research teams across multiple domains, and
                    enabled faster and smarter research through the development of algorithmic and machine learning based solutions to research problems.
        </em>
                <List bulleted>
                    <List.Item>
                        <Item>
                            <Item.Content>

                                <Item.Description>
                                    <p>
                                        Increased revenue for a multi-domain client-facing custom survey analysis and reporting product to <span className="highlighted-word">~$4.5 million</span>&nbsp;
                                         by updating a limited capability excel based product into a web based data reporting and visualization dashboard
                                        with advanced analytical capabilities.
                                    </p>
                                    <div>
                                        <Label icon="trophy" content="Gartner Innovation of the Year (2017)" size="small"></Label>

                                        <Label content="Python" size="small"></Label>
                                        <Label content="Flask" size="small"></Label>
                                        <Label content="Highcharts.js" size="small"></Label>
                                        <Label content="NoSQL" size="small"></Label>
                                        <Label content="MongoDB" size="small"></Label>
                                        <Label content="REST" size="small"></Label>
                                        <Label content="Python Pandas" size="small"></Label>
                                        <Label content="Numpy" size="small"></Label>
                                        <Label content="Scikit-learn" size="small"></Label>
                                        <Label content="Sole Developer" size="small"></Label>
                                        <Label content="Q4 2016-Q2 2017" size="small"></Label>

                                    </div>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </List.Item>
                    <List.Item>
                        <Item>
                            <Item.Content>

                                <Item.Description>
                                    <p>
                                        Developing data collection pipelines, and running quantitative and qualitative models on public financial data, and news articles for <span className="highlighted-word">300+ organizations</span> for the update to
                                        the CEB (now, Gartner) driven "<a href="https://books.google.co.in/books/about/STALL_POINTS_Most_Companies_Stop_Growing.html?id=Fy6NPwAACAAJ&source=kp_book_description&redir_esc=y" target="_blank">Stall Points</a>" research.
                                    </p>
                                    <div>

                                        <Label content="Python" size="small"></Label>
                                        <Label content="NoSQL" size="small"></Label>
                                        <Label content="MongoDB" size="small"></Label>
                                        <Label content="Python Pandas" size="small"></Label>
                                        <Label content="Numpy" size="small"></Label>
                                        <Label content="Scikit-learn" size="small"></Label>
                                        <Label content="Tensorflow" size="small"></Label>
                                        <Label content="Artificial Neural Networks" size="small"></Label>
                                        <Label content="Recurrent Neural Networks" size="small"></Label>
                                        <Label content="Statistics" size="small"></Label>
                                        <Label content="Statistics" size="small"></Label>

                                        <Label content="Deep Learning" size="small"></Label>
                                        <Label content="Machine Learning" size="small"></Label>
                                        <Label content="Q1 2017-Q3 2017" size="small"></Label>

                                    </div>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </List.Item>

                </List>
            </div>

        },
        {
            positions: [
                {
                    key: "dpi",
                    role: "Digital Products and Analysis Intern",
                    date: "Dec 2013—Mar 2014",
                    team: "Digital Products and Analysis",
                    active: false
                },
                {
                    key: "dpa",
                    role: "Digital Products and Analysis Associate",
                    date: "Mar 2014—Mar 2016",
                    team: "Digital Products and Analysis",
                    active: false
                },
                {
                    key: "dps",
                    role: "Digital Products and Analysis Specialist",
                    date: "Mar 2016—Mar 2017",
                    team: "Digital Products and Analysis",
                    active: false
                }


            ],
            content: <div>

                <em>
                    Developed infrastructure for a web analytics framework for digital content consumption on various Gartner websites along with a platform for data analysis and visualization;
                    and created automations and tools to streamline and optimize the creation and publication of digital products.
        </em>
                <List bulleted>
                    <List.Item>
                        <Item>
                            <Item.Content>

                                <Item.Description>
                                    <p>
                                        Helped optimize and inform the general research strategies of product teams across multiple domains
                                        by creating a feedback mechanism through the reporting and analysis of user consumption data of Gartner's domain-specific digital products.<br></br>
                                        <br></br>
                                        eg. <a href="https://muditsahni.shinyapps.io/mudit/" target="_blank">https://muditsahni.shinyapps.io/mudit/</a> (populated with mock survey data)
                                    </p>
                                    <div>

                                        <Label content="R" size="small"></Label>
                                        <Label content="Shiny" size="small"></Label>
                                        <Label content="Highcharts.js" size="small"></Label>
                                        <Label content="NoSQL" size="small"></Label>
                                        <Label content="MongoDB" size="small"></Label>
                                        <Label content="Adobe Omniture" size="small"></Label>
                                        <Label content="dplyr" size="small"></Label>
                                        <Label content="Sole Developer" size="small"></Label>
                                        <Label content="Q2 2015-Q1 2016" size="small"></Label>

                                    </div>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </List.Item>
                    <List.Item>
                        <Item>
                            <Item.Content>

                                <Item.Description>
                                    <p>
                                        Enabled product teams to conduct ad-hoc analysis on user consumption for their
                                        digital products by creating data pipelines from the data lake to different end points; and standadizing .
                                    </p>
                                    <div>

                                        <Label content="Python" size="small"></Label>
                                        <Label content="SQL" size="small"></Label>
                                        <Label content="MS SQL Server" size="small"></Label>
                                        <Label content="Sole Developer" size="small"></Label>
                                        <Label content="Q4 2014-Q3 2016" size="small"></Label>

                                    </div>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </List.Item>
                    <List.Item>
                        <Item>
                            <Item.Content>

                                <Item.Description>
                                    <p>
                                        Reduced workhours required for creating and publishing a digital product <span className="highlighted-word">by ~500 hours per month</span> by
                                        creating automations for web development, data standardization, and digital publishing.
                                    </p>
                                    <div>

                                        <Label content="Python" size="small"></Label>
                                        <Label content="Selenium" size="small"></Label>
                                        <Label content="Sole Developer" size="small"></Label>
                                        <Label content="2014" size="small"></Label>

                                    </div>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </List.Item>
                    <List.Item>
                        <Item>
                            <Item.Content>

                                <Item.Description>
                                    <p>
                                        Supported the research process by creating web crawlers and tools for data collection, structuring, and standardization.
                                    </p>
                                    <div>

                                        <Label content="Python" size="small"></Label>
                                        <Label content="Python Pandas" size="small"></Label>
                                        <Label content="Numpy" size="small"></Label>
                                        <Label content="Python NLTK" size="small"></Label>
                                        <Label content="BeautifulSoup" size="small"></Label>
                                        <Label content="Sole Developer" size="small"></Label>
                                        <Label content="Q4 2013-Q3 2014" size="small"></Label>

                                    </div>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </List.Item>

                </List>
            </div>

        }
    ]
}
export const expediaExperience = {
    key: "expedia",
    title: "expedia",
    data: [
        {
            positions: [

                {
                    key: "asde",
                    role: "Associate Software Development Engineer",
                    date: "Oct 2017—Mar 2019",
                    team: "Behaviour Experimentation Platform",
                    active: false
                },
                {
                    key: "sdei",
                    role: "Software Development Engineer I",
                    date: "Mar 2019—",
                    team: "Behaviour Experimentation Platform",
                    active: true
                }
            ],
            content: <div>
                <em>Leading the development of the experimentation analytics and reporting platform for the entire brand expedia,
                    creating big data pipelines for clickstream analytics, and providing research and analytics support to product teams.</em>

                {/* <div className="skills-box-title">significant projects</div> */}
                <List bulleted>
                    <List.Item>
                        <Item>
                            <Item.Content>

                                <Item.Description>
                                    <p>Provided accessiblity and availability for various A/B test datasets to
                                    the <span className="highlighted-word">entire company</span> by creating Spark pipelines to collect, and standardize
                                     data from a new data lake to various internal and external end points.</p>
                                    <div>
                                        <Label icon="trophy" content="Expedia 'My Hero!' Award" size="small"></Label>

                                        <Label content="Apache Spark" size="small"></Label>
                                        <Label content="Scala" size="small"></Label>
                                        <Label content="Java" size="small"></Label>
                                        <Label content="SQL" size="small"></Label>
                                        <Label content="AWS SNS" size="small"></Label>
                                        <Label content="AWS SQS" size="small"></Label>
                                        <Label content="AWS S3" size="small"></Label>
                                        <Label content="Apache Kafka" size="small"></Label>


                                        <Label content="Sole Developer" size="small"></Label>
                                        <Label content="Q3 2020" size="small"></Label>

                                    </div>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </List.Item>
                    <List.Item>
                        <Item>
                            <Item.Content>

                                <Item.Description>
                                    <p>Created a resource for the streamlined upkeep and update of json schemas being used for various datasets across the organisation.</p>
                                    <div>
                                        <Label content="Python" size="small"></Label>

                                        <Label content="Sole Developer" size="small"></Label>
                                        <Label content="Q2 2020" size="small"></Label>
                                    </div>

                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </List.Item>

                    <List.Item>
                        <Item>
                            <Item.Content>

                                <Item.Description>
                                    <p><span className="highlighted-word">Helped 25,000+ employees</span> across the entire Expedia Group avail travel benefits by
                                    designing and developing an internal website for coupon generation and use, account linking,
                                        and internal financial tracking of employee travel benefits.</p>
                                    <div>
                                        <Label content="TypeScript (NodeJS)" size="small"></Label>
                                        <Label content="ReactJS" size="small"></Label>
                                        <Label content="GraphQL" size="small"></Label>
                                        <Label content="Prisma" size="small"></Label>
                                        <Label content="PostgreSQL" size="small"></Label>
                                        <Label content="AWS Fargate" size="small"></Label>
                                        <Label content="Technical Product Manager" size="small"></Label>
                                        <Label content="Lead Developer" size="small"></Label>
                                        <Label content="Team Lead" size="small"></Label>
                                        <Label content="Q4 2019-Q1 2020" size="small"></Label>

                                    </div>

                                </Item.Description>

                            </Item.Content>
                        </Item>
                    </List.Item>
                    <List.Item>
                        <Item>
                            <Item.Content>

                                <Item.Description>
                                    <p>Enabled product teams across Expedia Group to streamline, standardize and accelerate their A/B test analysis and call process
                                    by creating a web platform providing data access, monitoring, analysis, and visualization
                                        for <span className="highlighted-word">{">"}40,000 A/B tests</span> at any given point. </p>
                                    <div>
                                        <Label content="Python" size="small"></Label>
                                        <Label content="Python Pandas" size="small"></Label>
                                        <Label content="Numpy" size="small"></Label>
                                        <Label content="JavaScript (NodeJS)" size="small"></Label>
                                        <Label content="ReactJS" size="small"></Label>
                                        <Label content="D3.js" size="small"></Label>
                                        <Label content="HTML" size="small"></Label>
                                        <Label content="CSS" size="small"></Label>

                                        <Label content="REST" size="small"></Label>
                                        <Label content="MS SQL Server" size="small"></Label>
                                        <Label content="Azure" size="small"></Label>
                                        <Label content="Sole Developer" size="small"></Label>
                                        <Label content="Q3 2018-Q1 2019" size="small"></Label>

                                    </div>

                                </Item.Description>

                            </Item.Content>
                        </Item>
                    </List.Item>
                    <List.Item>
                        <Item>
                            <Item.Content>

                                <Item.Description>
                                    <p>Improved A/B test data refresh rate by <span className="highlighted-word">{">"}40 times</span> (from one
                                    refresh a day to exccess of 40 refreshes a day) on the existing A/B test data reporting platform.</p>
                                    <div>
                                        <Label content="Python" size="small"></Label>
                                        <Label content="Python Pandas" size="small"></Label>
                                        <Label content="Numpy" size="small"></Label>
                                        <Label content="REST" size="small"></Label>
                                        <Label content="MS SQL Server" size="small"></Label>
                                        <Label content="Azure" size="small"></Label>
                                        <Label content="Sole Developer" size="small"></Label>
                                        <Label content="Q1 2018-Q2 2018" size="small"></Label>

                                    </div>

                                </Item.Description>

                            </Item.Content>
                        </Item>
                    </List.Item>

                </List>
            </div>
        }
    ]
}
export const expediaPanel =
{
    key: "expedia",
    title: "expedia",
    positions: [
        {
            key: "sdei",
            role: "Software Development Engineer I",
            date: "Mar 2019—",
            team: "Behaviour Experimentation Platform",
            content: <div>
                <em>Leading the development of the experimentation analytics and reporting platform for the entire brand expedia,
                    creating big data pipelines for clickstream analytics, and providing research and analytics support to product teams.</em>
                <br></br>                <br></br>

                <div className="skills-box-title">significant projects</div>
                <List bulleted>
                    <List.Item>
                        <Item>
                            <Item.Content>

                                <Item.Description>
                                    <p>Provided accessiblity and availability for various A/B test datasets to
                                    the entire company by creating Spark pipelines to collect, and standardize
                                     data from a new data lake to various internal and external end points.</p>
                                    <div>
                                        <Label icon="trophy" content="Expedia 'My Hero!' Award" size="small"></Label>

                                        <Label content="Apache Spark" size="small"></Label>
                                        <Label content="Scala" size="small"></Label>
                                        <Label content="Java" size="small"></Label>
                                        <Label content="SQL" size="small"></Label>
                                        <Label content="AWS SNS" size="small"></Label>
                                        <Label content="AWS SQS" size="small"></Label>
                                        <Label content="AWS S3" size="small"></Label>
                                        <Label content="Apache Kafka" size="small"></Label>


                                        <Label content="Sole Developer" size="small"></Label>
                                        <Label content="Q3 2020" size="small"></Label>

                                    </div>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </List.Item>
                    <List.Item>
                        <Item>
                            <Item.Content>

                                <Item.Description>
                                    <p>Created a resource for the streamlined upkeep and update of json schemas being used for various datasets across the organisation.</p>
                                    <div>
                                        <Label content="Python" size="small"></Label>

                                        <Label content="Sole Developer" size="small"></Label>
                                        <Label content="Q2 2020" size="small"></Label>
                                    </div>

                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </List.Item>

                    <List.Item>
                        <Item>
                            <Item.Content>

                                <Item.Description>
                                    <p>Helped 25,000+ employees across the entire Expedia Group avail travel benefits by
                                    designing and developing an internal website for coupon generation and use, account linking,
                                        and internal financial tracking of employee travel benefits.</p>
                                    <div>
                                        <Label content="TypeScript (NodeJS)" size="small"></Label>
                                        <Label content="ReactJS" size="small"></Label>
                                        <Label content="GraphQL" size="small"></Label>
                                        <Label content="Prisma" size="small"></Label>
                                        <Label content="PostgreSQL" size="small"></Label>
                                        <Label content="AWS Fargate" size="small"></Label>
                                        <Label content="Technical Product Manager" size="small"></Label>
                                        <Label content="Lead Developer" size="small"></Label>
                                        <Label content="Team of 3" size="small"></Label>
                                        <Label content="Q4 2019-Q1 2020" size="small"></Label>

                                    </div>

                                </Item.Description>

                            </Item.Content>
                        </Item>
                    </List.Item>
                    <List.Item>
                        <Item>
                            <Item.Content>

                                <Item.Description>
                                    <p>Enabled product teams across Expedia Group to streamline, standardize and accelerate their A/B test analysis and call process
                                        by creating a web platform for data access, monitoring, analysis, and visualization. </p>
                                    <div>
                                        <Label content="Python" size="small"></Label>
                                        <Label content="Python Pandas" size="small"></Label>
                                        <Label content="Numpy" size="small"></Label>
                                        <Label content="JavaScript (NodeJS)" size="small"></Label>
                                        <Label content="ReactJS" size="small"></Label>
                                        <Label content="D3.js" size="small"></Label>
                                        <Label content="HTML" size="small"></Label>
                                        <Label content="CSS" size="small"></Label>

                                        <Label content="REST" size="small"></Label>
                                        <Label content="MS SQL Server" size="small"></Label>
                                        <Label content="Azure" size="small"></Label>
                                        <Label content="Sole Developer" size="small"></Label>
                                        <Label content="Q3 2018-Q1 2019" size="small"></Label>

                                    </div>

                                </Item.Description>

                            </Item.Content>
                        </Item>
                    </List.Item>
                    <List.Item>
                        <Item>
                            <Item.Content>

                                <Item.Description>
                                    <p>Improved A/B test data refresh rate by {">"}40 times (from one refresh a day to exccess of 40 refreshes a day) on the existing A/B test data reporting platform.</p>
                                    <div>
                                        <Label content="Python" size="small"></Label>
                                        <Label content="Python Pandas" size="small"></Label>
                                        <Label content="Numpy" size="small"></Label>
                                        <Label content="REST" size="small"></Label>
                                        <Label content="MS SQL Server" size="small"></Label>
                                        <Label content="Azure" size="small"></Label>
                                        <Label content="Sole Developer" size="small"></Label>
                                        <Label content="Q1 2018-Q2 2018" size="small"></Label>

                                    </div>

                                </Item.Description>

                            </Item.Content>
                        </Item>
                    </List.Item>

                </List>
            </div>
        },
        {
            key: "asde",
            role: "Associate Software Development Engineer",
            date: "Oct 2017—Mar 2019",
            team: "Behaviour Experimentation Platform",
            content: <p></p>

        },


    ]
}

export const gartnerPanel =
{
    key: "gartner",
    title: "gartner",
    positions: [
        {
            key: "qs",
            role: "Quant Specialist",
            date: "Mar 2017—Oct 2017",
            team: "Quantitative Research & Analysis",
            content: <div>
                <em>Conduct quantitative and qualititative analysis on survey data, .</em>
                <List bulleted>
                    <List.Item>
                        <Item>
                            <Item.Content>
                                <Item.Meta>
                                    Role: Sole Developer
                                </Item.Meta>

                                <Item.Description>
                                    <p></p>
                                </Item.Description>
                                <Item.Extra>
                                    Apache Spark, Scala, Java, SQL, AWS SNS, AWS SQS, AWS S3, Apache Kafka
                                </Item.Extra>

                            </Item.Content>
                        </Item>
                    </List.Item>
                </List>
            </div>
        },
        {
            key: "dpas",
            role: "Digital Products and Analysis Specialist",
            date: "Mar 2016—Mar 2017",
            team: "Digital Products and Analysis",
            content: <div>
                <em>Conduct quantitative and qualititative analysis on survey data, .</em>
                <List bulleted>
                    <List.Item>
                        <Item>
                            <Item.Content>
                                <Item.Description>
                                    <p>Increased Quantitative Survey Analysis and Benchmarking product retention by ~30%
                                    by building a web based data visualization platform for custom reports.
                                        <a href="https://muditsahni.shinyapps.io/mudit" target="_blank"> Click here for an example.</a></p>
                                    <div>
                                        <Label icon="trophy" content="Gartner Innovation of the Year (2017)" size="small"></Label>
                                        <Label content="R" size="small"></Label>
                                        <Label content="Shiny" size="small"></Label>
                                        <Label content="Highcharts.js" size="small"></Label>
                                        <Label content="Sole Developer" size="small"></Label>
                                    </div>
                                </Item.Description>

                            </Item.Content>
                        </Item>
                    </List.Item>
                </List>
            </div>

        },
        {
            key: "dpaa",
            role: "Digital Products and Analysis Associate",
            date: "Mar 2014—Mar 2016",
            team: "Digital Products and Analysis",
            content: <p></p>

        },

        {
            key: "dpai",
            role: "Digital Products and Analysis Intern",
            date: "Dec 2013—Mar 2014",
            team: "Digital Products and Analysis",
            content: <p></p>

        },
    ]
}

export const techMahindraPanel =
{
    key: "techmahindra",
    title: "Tech Mahindra",
    positions: [
        {
            key: "intern",
            role: "Intern",
            date: "May 2012—Jul 2012",
            team: "ERP Development",
            content: <p></p>

        },


    ]
}
