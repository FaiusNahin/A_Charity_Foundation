// Fake Data
const charity = [
    {
        ceoId: 1001,
        name: 'Sundar Pichai',
        born: 'Pichai Sundararajan June 10, 1972 (age 49)',
        donation: 600,
        company: 'Google',
        citizenship: 'United States',
        image: 'https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/02/Sundar_Pichai_Attr-Maurizio-Pesce-1.jpg',
        bio: 'Sundar Pichai received a Metallurgical Engineering degree from Indian Institute of Technology Kharagpur and holds an MS from Stanford University in Material Sciences and Engineering, and an MBA from the Wharton School of the University of Pennsylvania.Pichai joined Google in 2004, where he led the product management and innovation efforts for a suite of Google’s client software products.'
    },
    {
        ceoId: 1002,
        name: 'Elon Musk',
        born: 'Elon Reeve Musk June 28, 1971 (age 50) Pretoria, Transvaal, South Africa',
        donation: 950.2,
        company: 'Tesla & SpaceX',
        citizenship: 'South Africa (1971–present)Canada (1971–present)United States (2002–present)',
        image: 'https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/ElonMusk.png',
        bio: 'At the age of 12, Elon Musk taught himself computer programming. He founded SpaceX, an aerospace manufacturer and space transport services company, in May 2002, and is CEO and lead designer today. He also co-founded Tesla Inc. in 2003, an electric vehicle and solar panel manufacturer of which he is its CEO and product architect. Musk reported that his goals for SpaceX, Tesla and SolarCity revolve around his vision to change the world and humanity moving forward. These goals include the reduction of global warming through the production of sustainable energy and reducing the “risk of human extinction” via the contact and establishment of human inhabitation on Mars.'
    },
    {
        ceoId: 1003,
        name: 'Satya Nadella',
        born: 'Satya Narayana Nadella 19 August 1967 (age 54) Hyderabad, Andhra Pradesh, India',
        donation: 850.85,
        company: 'Microsoft',
        citizenship: 'United States',
        image: 'https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/02/Satya_Nadella-Official-Leweb-Photos.jpg',
        bio: 'In 1988, Satya Nadella attained a Bachelor of Engineering degree in electrical engineering from Manipal Institute of Technology before travelling to the US to study for a Master of Science in Computer Science which he obtained in 1990 from the University of Wisconsin–Milwaukee. He later received his MBA degree from the University of Chicago. Nadella was appointed the new CEO of Microsoft in 2014 – he is the 3rd CEO in the company’s history. Before that, he was Executive Vice President of Microsoft’s cloud and enterprise group.'
    },
    {
        ceoId: 1004,
        name: 'Jeff Bezos',
        born: 'Jeffrey Preston Jorgensen January 12, 1964 (age 57) Albuquerque, New Mexico, U.S.',
        donation: 975.3,
        company: 'Amazon',
        citizenship: 'United States',
        image: 'https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/JeffBezos.jpg',
        bio: 'As a child, Jeff Bezos showed an early interest in how things work—reportedly dismantling his crib as a toddler in order to rebuild it as a bed and turning his parents’ garage into a laboratory. He pursued his interest in computers at Princeton University, where he graduated in 1986 with a degree in Computer Science and Electrical Engineering. Named after the South American River, Bezos launched Amazon.com on 16th July 1995. The website easily outpaced its competitors, becoming an e-commerce leader after 2 years. The company went public in 1997. His continued success led him to purchase The Washington Post newspaper in 2013 for $250 million.'
    },
    {
        ceoId: 1005,
        name: 'Bill Gates',
        born: 'William Henry Gates III October 28, 1955 (age 65) Seattle, Washington, U.S.',
        donation: 997.34,
        company: 'Microsoft',
        citizenship: 'United States',
        image: 'https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/BillGates-1.jpg',
        bio: 'While not the current CEO of Microsoft, Bill Gates remains an innovator at heart and one of the most acclaimed entrepreneurs of the computer industry. The Microsoft Corporation Founder has made such an impact on our modern world that you would be hard-pressed to find someone who hasn’t heard of him. Microsoft launched its first retail version of Microsoft Windows on November 20, 1985. To this day, the incorporation of the improved personal computer he publicised has had a monumental worldwide influence, with over one billion PCs in use by the end of 2008.'
    },
    {
        ceoId: 1006,
        name: 'Daniel Zhang',
        born: 'January 11, 1972 (age 49) Shanghai',
        donation: 770,
        company: 'Alibaba',
        citizenship: 'China',
        image: 'https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/%E9%80%8D%E9%81%A5%E5%AD%90%E6%A0%87%E5%87%86%E7%85%A71-1-732x1024.png',
        bio: 'Daniel Zhang has served as CEO of Alibaba Group since 2015. In September 2019, he will take on the additional role of Executive Chairman, succeeding Jack Ma. He first joined the company as CFO of Taobao in 2007 and has also served as President of Tmall and COO of Alibaba Group. Well known as a visionary strategist and operator, Zhang conceived the first ever 11.11 Global Shopping Festival in 2009. The event has since grown into the world’s largest annual shopping event and a brand-building phenomenon that has transformed the retail experience by integrating shopping, media and entertainment.'
    },
    {
        ceoId: 1007,
        name: 'Mark Zuckerberg',
        born: 'Mark Elliot Zuckerberg May 14, 1984 (age 37) White Plains, New York, U.S.',
        donation: 821.86,
        company: 'Facebook',
        citizenship: 'United States',
        image: 'https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/Mark-Zuckerberg.jpg',
        bio: 'Zuckerberg has always demonstrated his aptitude and passion for creating and building. Zuckerberg’s father taught him Atari BASIC Programming in the 1990s, and he continued to study psychology and computer science in his college years. In January 2004, Zuckerberg began writing code for “Thefacebook”, a new website initially located at thefacebook.com. Since 2010, Time magazine has named Zuckerberg among the 100 wealthiest and most influential people in the world as a part of its Person of the Year award, as well as 10th on Forbes list of The World’s Most Powerful People in December 2016. After launching the website from his Harvard University dormitory room on February 4, 2004, Facebook expanded rapidly, reaching one billion users by 2012. As of early 2017, Facebook had 2.2 billion active users (that had logged in within 30 days).'
    },
    {
        ceoId: 1008,
        name: 'Lakshmi Mittal',
        born: '15 June 1950 (age 71)[1][2] Sadulpur, Rajasthan, India',
        donation: 509.23,
        company: 'ArcelorMittal',
        citizenship: 'Indian',
        image: 'https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/LakshmiMittal.jpg',
        bio: 'Laksmi Mittal is a steel magnate based in the UK. He is Chairman and CEO of ArcelorMittal, the largest steelmaking company in the world. He is a member of the Global CEO Council of the Chinese People’s Association for Friendship with Foreign Countries, the Foreign Investment Council in Kazakhstan, the World Economic Forum’s International Business Council, and the European Round Table of Industrialists. Due to the restriction of steel production by the Indian government in 1976, Mittal opened his first steel factory, PT Ispat Indo in Indonesia when he was 26. ArcelorMittal was founded in 2006 in the takeover of Western European steel maker Arcelor by Mittal SteeI, an Indian-owned international steel maker.'
    },
    {
        ceoId: 1009,
        name: 'Indra Nooyi',
        born: 'Indra Krishnamurthy October 28, 1955 (age 65) Madras, India (now Chennai)',
        donation: 150.6,
        company: 'PepsiCo',
        citizenship: 'United States',
        image: 'https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/02/Indra-Nooyi-attr-Jeff-Bedford.jpg',
        bio: 'Indra Nooyi was named President and CEO of PepsiCo in 2006, having joined the company in 1994. She has directed the company’s global strategy for over a decade, taking the lead on major acquisitions such as the deal with Tropicana in 1998. Nooyi holds a master’s Public and Private Management degree from Yale School of Management and currently oversees more than 26,000 employees globally and over 100 brands and trademarks.'
    },
    {
        ceoId: 1010,
        name: 'Warren Buffett',
        born: 'Warren Edward Buffett August 30, 1930 (age 91) Omaha, Nebraska, U.S.',
        donation: 770.4,
        company: 'Berkshire Hathaway',
        citizenship: 'United States',
        image: 'https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/WarrenBuffett-1.jpg',
        bio: 'It’s not hard to believe that philanthropist and business magnate, Warren Buffett, is considered one of the most successful investors in the world – in his youth, he attended the Wharton School of the University of Pennsylvania in the pursuit of business and investing and invested in a 40-acre Omaha farm as a freshman. When Berkshire Hathaway began selling class A shares on May 29, 1990 with the market closing at $7,175 per share, Buffett became a billionaire.'
    },
    {
        ceoId: 1011,
        name: 'Tim Cook',
        born: 'Timothy Donald Cook November 1, 1960 (age 60) Mobile, Alabama, U.S.',
        donation: 933.7,
        company: 'Apple',
        citizenship: 'United States',
        image: 'https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/02/Tim_Cook_2009-attr-Valery-Marchive-LeMagIT.jpg',
        bio: 'In 1982, Tim Cook attained a Bachelor of Science in industrial engineering from Auburn University, and his Master of Business Administration (MBA) from Duke University’s Fuqua School of Business in 1988. Steve Jobs asked Tim Cook to join Apple in 1998, where he first served as Senior Vice President for worldwide operations.'
    },
    {
        ceoId: 1012,
        name: 'Aliko Dangote',
        born: '10 April 1957 (age 64) Kano, Nigeria',
        donation: 865,
        company: 'Dangote Group',
        citizenship: 'Nigerian',
        image: 'https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/AlikoDangote.jpg',
        bio: 'Aliko Dangote is the CEO and owner of the Dangote Group, which has interests in commodities in Nigeria and other African countries. Established as a small trading firm in 1977, the Dangote Group eventually expanded to cover food processing, cement manufacturing and freight. Today, Dangote Group is the main supplier to Nigeria’s soft drink breweries and confectioners. Producing 800,000 tonnes of sugar annually, it is the largest refinery in Africa and third largest in the world, as well as the largest industrial conglomerate in West Africa.'
    },
    {
        ceoId: 1013,
        name: 'Larry Page',
        born: '	Lawrence Edward Page March 26, 1973 (age 48) Lansing, Michigan, U.S.',
        donation: 720.85,
        company: 'Alphabet Inc.',
        citizenship: 'United States',
        image: 'https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/LarryPage.jpg',
        bio: 'It’s hard to remember a time before Google. It almost feels as if it always naturally existed, synonymous with the internet itself. It was the collaboration of Ph.D. students Larry Page and Sergey Brin that brought it to global computers in 1998, quickly becoming the most visited website in the world with the mission statement: “To organize the world’s information and make it universally accessible and useful.” Google became Alphabet Inc. in 2015, after reorganising its assets into a conglomerate, with Google remaining its head subsidiary. Sundar Pichai became CEO of Google upon its completion, replacing Larry Page, who became CEO of Alphabet.'
    }
]