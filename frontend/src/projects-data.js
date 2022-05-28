const PROJECTS = [
  {
    projectId: 0,
    image: '/projects/kolo.jpeg',
    title: 'Kolo',
    address: 'Ukraine',
    ethAddress: '0x7dd7e8d676c12c5b11d171fcf2745f927cbf2702',
    //customColor: '#F9DD4B',
    tiers: [
      {
        name: 'Crypto Legolas',
        currency: 'usdc',
        amount: 50,
        period: 'month',
        tokenId: 1,
        tierIndex: 0,
      },
      {
        name: 'Crypto Frodo',
        currency: 'usdc',
        amount: 100,
        period: 'month',
        tokenId: 1,
        tierIndex: 1,
      },
      {
        name: 'Crypto Gandalf',
        currency: 'usdc',
        amount: 500,
        period: 'month',
        tokenId: 1,
        tierIndex: 2,
      },
    ],
    description:
      'KOLO is a team of top managers of product companies that have created a fund to provide operational assistance to the Armed Forces. The world is investing much to stop this war. But crimes continue. Technology can accelerate these efforts and prevent worsening of the humanitarian crisis. Help Ukrainians fight the cause of the crisis, not just its consequences.',
  },
  {
    projectId: 1,
    title: 'Alla and Denys Koshelnik',
    address: 'Ukraine',
    ethAddress: '0xcec9a2fdBF5fC44d8772E4f2b672d113f3750292',
    tiers: [
      {
        name: 'Crypto Peasant',
        currency: 'usdc',
        amount: 10,
        period: 'week',
        tokenId: 1,
        tierIndex: 0,
      },
      {
        name: 'Crypto Warrior',
        currency: 'usdc',
        amount: 50,
        period: '2 weeks',
        tokenId: 1,
        tierIndex: 1,
      },
      {
        name: 'Crypto Lord',
        currency: 'usdc',
        amount: 150,
        period: 'month',
        tokenId: 1,
        tierIndex: 2,
      },
    ],
    image: '/projects/All and Denys.jpg',
    description:
      'We’re a team of 10 people, and we use our own cars (5) to help soldiers from Ukrainian army, ​​Territorial Defense Forces with needed equipments. Before the war, we were working in restaurant business, but we were always helping kids and nursing homes. ​​Currently, we’re almost full-time volunteers. ​​ Our team is covering humanitarian aid, we’re helping children, displaced people, ​​ disabled persons, lonely mothers with kids and lonely elderlies.​​ There are many people writing to us ​​ asking for the help, many of them are displaced people, ​​so we are carefully reviewing their requests and try to provide individual special help for each of them, ​​like to select right sizes of clothes or shoes. We try to find the best stuff for them and. ​​ The only fundraising we have now is for delivery needs. ​​We have to deliver humanitarian aids in Ukraine, and since the price for petrol is dramatically increased,​​ it became harder to transport the aid. Also we are protecting some ​​animal shelters in Kyiv and the cities nearby. ​​Almost 15% of the humanitarian help we received is for animals, ​​so we are spreading the news once we got it and try to deliver this food to those who need it.',
  },
  {
    projectId: 2,
    title: 'Iryna Mischenko',
    address: 'Ukraine',
    ethAddress: '0xb8604241db5fc80be08788cb13dec9ebd58ee3c5',
    tiers: [
      {
        name: 'Crypto Peasant',
        currency: 'usdc',
        amount: 10,
        period: 'week',
        tokenId: 1,
        tierIndex: 0,
      },
      {
        name: 'Crypto Warrior',
        currency: 'usdc',
        amount: 50,
        period: '2 weeks',
        tokenId: 1,
        tokenDecimals: 6,
        tierIndex: 1,
      },
      {
        name: 'Crypto Lord',
        currency: 'usdc',
        amount: 200,
        period: 'month',
        tokenId: 1,
        tierIndex: 2,
      },
    ],
    image: '/projects/Iryna Mischenko.jpg',
    description:
      'I am the former owner of the travel agency “Friends”. Currently, I’m a volunteer. I’m helping our military guys with all what they’re asking me for. ​​ My approach is to announce a very particular fundraise for 1-2 days to buy one thing, for example a military off-road car. Once we did it, I publish a report about a purchase and start a new fundraising. For me, it’s very crucial in terms of fundraising to know soldiers in person or if my friends know them, so we can help real particular people. Secondly, I must be sure that what we bought is really in place and doing its work (shooting, flying etc), and not is being resold on a secondary market. Over 400,000 dollars have been collected in 80 days. ',
  },
];

export default PROJECTS;
