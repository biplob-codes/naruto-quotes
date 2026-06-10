import { prisma } from '../lib/prisma';

const SEED_USERS = [
   {
      name: 'Sasuke Uchiha',
      email: 'sasuke@uchiha.konoha',
      image: 'https://res.cloudinary.com/dghw9vqu0/image/upload/w_64,h_64,c_fill,g_face/v1779978782/Sasuke_Part_1_cvfxqy.webp',
   },
   {
      name: 'Kakashi Hatake',
      email: 'kakashi@hatake.konoha',
      image: 'https://res.cloudinary.com/dghw9vqu0/image/upload/w_64,h_64,c_fill,g_face/v1779978041/1000_k8et4f.webp',
   },
   {
      name: 'Itachi Uchiha',
      email: 'itachi@uchiha.konoha',
      image: 'https://res.cloudinary.com/dghw9vqu0/image/upload/w_64,h_64,c_fill,g_face/v1779978781/Itachi_iaie7p.webp',
   },
   {
      name: 'Tobirama Senju',
      email: 'tobirama@senju.konoha',
      image: 'https://res.cloudinary.com/dghw9vqu0/image/upload/w_64,h_64,c_fill,g_face/v1779978783/Tobirama_Senju_tmbjti.webp',
   },
   {
      name: 'Minato Namikaze',
      email: 'minato@namikaze.konoha',
      image: 'https://res.cloudinary.com/dghw9vqu0/image/upload/w_64,h_64,c_fill,g_face/v1779978781/Minato_Namikaze_praaaj.webp',
   },
   {
      name: 'Jiraiya Sensei',
      email: 'jiraiya@sannin.konoha',
      image: 'https://res.cloudinary.com/dghw9vqu0/image/upload/w_64,h_64,c_fill,g_face/v1779978782/Profile_Jiraiya.PNG_hs7r5p.webp',
   },
   {
      name: 'Tsunade Senju',
      email: 'tsunade@senju.konoha',
      image: 'https://res.cloudinary.com/dghw9vqu0/image/upload/w_64,h_64,c_fill,g_face/v1779978783/Tsunade_infobox2_jgqswd.webp',
   },
   {
      name: 'Shikamaru Nara',
      email: 'shikamaru@nara.konoha',
      image: 'https://res.cloudinary.com/dghw9vqu0/image/upload/w_64,h_64,c_fill,g_face/v1779978783/Shikamaru_Nara_efaqim.webp',
   },
   {
      name: 'Gaara Kazekage',
      email: 'gaara@kazekage.konoha',
      image: 'https://res.cloudinary.com/dghw9vqu0/image/upload/w_64,h_64,c_fill,g_face/v1779979216/1000_vxeuwh.webp',
   },
   {
      name: 'Madara Uchiha',
      email: 'madara@uchiha.konoha',
      image: 'https://res.cloudinary.com/dghw9vqu0/image/upload/w_64,h_64,c_fill,g_face/v1779978781/Madara_img2_y2hsfd.webp',
   },
   {
      name: 'Hinata Hyuga',
      email: 'hinata@hyuga.konoha',
      image: 'https://res.cloudinary.com/dghw9vqu0/image/upload/w_64,h_64,c_fill,g_face/v1779978781/Hinata_27s_byakugan_a71wen.webp',
   },
   {
      name: 'Neji Hyuga',
      email: 'neji@hyuga.konoha',
      image: 'https://res.cloudinary.com/dghw9vqu0/image/upload/w_64,h_64,c_fill,g_face/v1779978782/Neji_Part_I_Screenshot_jsg7gw.webp',
   },
   {
      name: 'Hashirama Senju',
      email: 'hashirama@senju.konoha',
      image: 'https://res.cloudinary.com/dghw9vqu0/image/upload/w_64,h_64,c_fill,g_face/v1779978780/Hashirama_Senju_exdjcg.webp',
   },
   {
      name: 'Obito Uchiha',
      email: 'obito@uchiha.konoha',
      image: 'https://res.cloudinary.com/dghw9vqu0/image/upload/w_64,h_64,c_fill,g_face/v1779978782/Obito_Uchiha_sti38x.webp',
   },
];

const QUOTES_BY_EMAIL: Record<string, string[]> = {
   'sasuke@uchiha.konoha': [
      'I have long since closed my eyes. My only goal is in the darkness. There is nothing for me in the light. Those who do not know darkness cannot truly understand the light, and I have chosen to walk this path so that others never have to.',
      'I could say I did it on a whim, or that I planned it, but the truth is I do not really know myself why I made the choices I did. All I know is that I have to see this through to the end, even if the end leaves me with nothing.',
      'Naruto, you are the only one who has always treated me as an equal, as a friend, and not as a prodigy or a monster. That is precisely why you are the one person I cannot afford to lose to — and the one person I have never been able to truly hate.',
   ],
   'kakashi@hatake.konoha': [
      'In the ninja world, those who break the rules are called trash. But those who abandon their comrades are even worse than trash. A system built on survival at any cost will eventually consume everything it was meant to protect.',
      'I will not let my comrades die. That is a lesson I learned far too late in my life, paid for with a grief I carry to this day. If I can spare even one person that same weight, then every scar on my soul was worth bearing.',
      'Wherever someone thinks of you and cherishes the time you shared, that is where you continue to exist. The dead do not truly vanish as long as they are remembered — and the best way to honor them is to live more fully than they were allowed to.',
   ],
   'itachi@uchiha.konoha': [
      'People live their lives bound by what they accept as correct and true. That is how they define reality. But what does it mean to be correct or true? Merely to be in agreement with the rest of the world. History is shaped by the victors, and truth is often just the story told by whoever remains.',
      'You are not even worth killing. Foolish little brother, if you wish to kill me, then hate me, curse me, and survive in an unsightly way. Run, run, and cling to life. And one day, when you have the same eyes as me, come before me.',
      'No matter how powerful you become, do not try to bear everything alone. If you do, you will surely fail. The strength of a person is not measured in what they can endure alone, but in what they choose to protect and who they allow to stand beside them.',
   ],
   'tobirama@senju.konoha': [
      'Hatred is not something that can be wished away or reasoned out of existence. It is a force as natural and persistent as gravity. The only way to reduce it is through action — through systems, through accountability, through the long and thankless work of building institutions that outlast any single life.',
      'Peace that is purchased through naivety is merely a postponed war. True stability requires not just goodwill but structure — laws that bind even the powerful, checks that prevent any one clan or person from accumulating unchecked authority. That is the foundation of a village that can actually endure.',
   ],
   'minato@namikaze.konoha': [
      'When I became Hokage, I thought the hardest part would be the battles. It was not. The hardest part is making decisions where every path costs something precious — and then carrying the weight of that cost for the rest of your life, without letting it break you.',
      'I believe in you, Naruto. Not because you are my son, but because I have seen what you carry and I have watched you refuse to put it down. The world will try to define you by your burden. Do not let it. Define yourself by what you choose to do with it.',
      'A person grows when they are truly needed by someone. There is no substitute for that feeling — no rank, no title, no power that replaces the simple knowledge that your existence genuinely matters to another human being.',
   ],
   'jiraiya@sannin.konoha': [
      'A person who has never felt pain will never understand true compassion. I have lived a long life full of failures, and every one of them taught me something that victory never could. The measure of a shinobi is not how rarely they fall, but how completely they understand why they fell.',
      'I have met many students in my life. Some surpassed me in raw talent, some in ambition. But the ones who truly changed the world were the ones who refused to stop believing in people — even people who had given them every reason to stop. That kind of stubbornness is rarer than any jutsu.',
      'This is the book of my life. It is not a perfect story, and the hero does not always win. But it is honest, and it is mine. I believe that a story told with honesty — even an ugly, unfinished one — does more for the world than a polished lie ever could.',
   ],
   'tsunade@senju.konoha': [
      'A hundred failed surgeries taught me more than a hundred successes. Failure strips away every illusion you have about yourself and leaves you with only what is real. You can choose to be destroyed by that, or you can choose to build something truer from what remains.',
      'Bet everything on the one in a million chance. I have done it my entire life. People call that reckless, and maybe they are right. But the alternative — playing it safe, protecting yourself, never risking the loss — that is a kind of slow death I have never been willing to accept.',
   ],
   'shikamaru@nara.konoha': [
      'Laziness is not the absence of ambition. It is the refusal to expend effort on things that do not truly matter. The problem is that most people cannot tell the difference. They exhaust themselves chasing outcomes that were never worth the cost and call it dedication.',
      'A true leader is not someone who is smarter than everyone around them. A true leader is someone who can look at a situation with all of its emotion stripped away, identify the least costly path to protecting what matters, and then carry out that path without flinching — even when it costs them personally.',
      'Asuma-sensei taught me that there is a next generation of pieces on the board, and our job is not to win the current game but to make sure those pieces have a board left to play on. That is the only long game that actually matters.',
   ],
   'gaara@kazekage.konoha': [
      'I used to think that because no one loved me, I was free to love only myself. But that kind of freedom is just another prison — one with no walls and no door, because there is nowhere to escape to when you are trapped inside yourself.',
      'Sand that has never been compressed by pressure is just sand — it drifts, it scatters, it holds nothing. It is only through enduring that weight that it becomes something that can actually protect. I did not understand that until someone chose to protect me first.',
      'A person who feels no pain will never grow strong enough to truly protect others. I know what it is to be crushed under hatred, and that knowledge is the only reason I am capable of understanding what the people of this village carry. My wounds are the source of my strength as a leader, not a weakness.',
   ],
   'madara@uchiha.konoha': [
      'Wake up to reality. Nothing ever goes as planned in this world. The longer you live, the more you realize that only pain, suffering, and futility exist in this reality. Listen, everywhere you look in this world, wherever there is light, there will always be shadows to swallow it up.',
      'In this world, wherever there is light, there are also shadows. As long as the concept of winners exists, there must also be losers. The selfish desire of wanting to maintain peace causes wars, and hatred is born to protect love. These are all nexuses of cause and effect. But in the world of my Infinite Tsukuyomi, none of that exists.',
      'Power is not something you are given. It is something you take — and then defend, alone, against everyone who wants what you have built. That is the true nature of this world. Any philosophy that asks you to trust in others is only preparing you to be betrayed by them.',
   ],
   'hinata@hyuga.konoha': [
      'I used to think that being weak meant I had nothing to offer. That the only way to matter was to become strong enough that no one could ignore me. But watching Naruto, I learned something different — that showing up for someone, again and again, even when you are afraid, even when you are small, is its own form of strength that power alone can never replace.',
      'I am not afraid of you anymore. My whole life I was told to be someone else — quieter, stronger, more like what the Hyuga clan needed me to be. But I have finally understood that the truest form of courage is not becoming what others demand of you. It is choosing who you want to be, and walking toward it even when your legs shake.',
   ],
   'neji@hyuga.konoha': [
      "The caged bird's greatest tragedy is not the cage itself but the moment it forgets what open sky feels like. I spent years believing that fate was absolute, that the circumstances of our birth were a sentence we had no power to appeal. I was wrong. Destiny is not written at birth — it is written in every choice made afterward.",
      'There are things in this world that cannot be changed by sheer will. And there are things that cannot be preserved without it. Wisdom is knowing which is which. I spent too long mistaking the former for the latter — calling my own surrender the will of heaven to make it easier to accept.',
   ],
   'hashirama@senju.konoha': [
      'The village is not just a place where people live. It is an idea — the idea that people who have every reason to distrust each other can choose, again and again, to build something together instead. That idea is more powerful than any jutsu, and more fragile than most people realize until it is already broken.',
      'Madara and I both wanted peace. We were willing to bleed for it, sacrifice for it, give up everything we had built for it. The only difference was that I believed peace required trusting people, and he believed it required controlling them. That difference destroyed everything.',
      'It is not that the world lacks people willing to die for something. The world is full of those. What it lacks are people willing to live for something — patiently, thanklessly, across decades, without the reward of being remembered for it. That is the harder sacrifice, and the more necessary one.',
   ],
   'obito@uchiha.konoha': [
      'In this world, the ones who abandon their ideals are called trash. But the ones who cling to their ideals even after losing everything — those people are either saints or fools, and the difference is too small to matter when you are standing in the rubble of the life you were supposed to have.',
      'I wanted to become Hokage. I wanted to protect everyone I loved. And then I watched the world take everything from me piece by piece, and I had to decide whether to keep believing in a dream that the world had already proven to be a lie. I made the wrong choice. But the dream was never wrong — only I was.',
      'When a person has something precious to protect, that is when they can truly become strong. I forgot that. I thought that pain absolved me of the responsibility to keep growing, keep protecting. But strength that stops protecting is just destruction wearing a familiar face.',
   ],
};

async function main() {
   console.log('Seeding users...');

   for (const userData of SEED_USERS) {
      const user = await prisma.user.upsert({
         where: { email: userData.email },
         update: {},
         create: userData,
      });

      const quotes = QUOTES_BY_EMAIL[userData.email] ?? [];
      for (const title of quotes) {
         await prisma.quote.create({
            data: { title, authorId: user.id },
         });
      }

      console.log(`✓ ${user.name} (${quotes.length} quotes)`);
   }

   console.log('Done.');
}

main()
   .catch(console.error)
   .finally(() => prisma.$disconnect());
