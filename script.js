window.onload = function(e) { 
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	todayString = mm + '/' + dd + '/' + yyyy;
	document.getElementById('date').innerHTML = todayString;
	var reasons = ['Being an inspiration',
			'Going on nice walks through the woods with me',
			'Teaching us to recycle',
			'Giving me swimming lessons in the Poconos',
			'Wanting me to be happy',
			'Being there for my most embarrassing moments',
			'Bringing me to so many different doctors to make me better',
			'Cleaning poop off of my back',
			'Helping me play the clarinet',
			'Instilling in me core values',
			'Always believed in me',
			'Enforcing the values of not smoking, drinking, or doing drugs',
			'Telling me when I had bad ideas so I didn’t make a fool of myself',
			'Accepting the fact that I’m a total nerd ',
			'Moving to Westchester so I could be happier',
			'Looking past all of my flaws',
			'Your love',
			'CUDDLES',
			'Buying me books',
			'You’re a really good reporter',
			'So generous',
			'Dealing with my disgusting sweaty clothes and various braces',
			'Taking me shopping even though I don’t need more stuff',
			'Loving my creativity',
			'BEING YOU',
			'Teaching me to ride a bike',
			'Making me happy',
			'Convincing me to wear jeans',
			'Teaching me to care about the environment',
			'Watching TV with me',
			'Picking me up from school even though you were busy with work',
			'Because you let me do physical therapy  ',
			'Matzo ball soup',
			'Knowing the right thing to say when I’m down',
			'Your smile :)',
			'Driving me to soccer games and watch even though you don’t even like soccer',
			'Staying with me when I dislocated my hip on Mother’s Day',
			'Works tirelessly ',
			'Taking me on vacations',
			'Being a role model',
			'Packed up the car with all of my things despite the volume',
			'Teaching me the value of hard work',
			'Being there',
			'Planning our vacations',
			'Going from a low-income household to where you are now is inspirational',
			'Letting me know when I was messing up so I could fix it',
			'Picture a guy with really really long arms. Like down to his knees long. Now picture his wingspan. I love you this much! No wait, MORE!',
			'Always there for me',
			'Wanting me to succeed',
			'Teaching me to drive',
			'Teaching me how to write',
			'Being my mom',
			'Always sees the bright side of me',
			'Tucking me in',
			'Did a great job of raising your kids, clearly (COUGH COUGH)',
			'You’re beautiful',
			'Always making sure to make awesome birthday cakes every year',
			'Being a great host whenever friends were over',
			'Teaching me about saving money',
			'Bringing me to the 40-under-40 party',
			'You tried to get us the best educations you could',
			'Hugging me when I need it and when I don’t :)',
			'Being a good singer (better than you think)',
			'Snuggles',
			'Loves cats just like I do',
			'Kisses!!!',
			'For being a survivor',
			'Being successful',
			'Dealing with me and Scott going to different schools in 8th grade',
			'Comforting me when I was sad',
			'Making me eat fruit',
			'The thing where you do sorcery in the kitchen and yummy stuff comes out',
			'Growing great food and beautiful plants in the backyard',
			'I can feel your love even if you’re not here with me',
			'Always up for a call if I’m sad',
			'Because you work really hard',
			'Buying me soft pillows and blankets',
			'Giving me the freedom to do what I love',
			'Always being happy to hear from me',
			'Buying me all the Legos',
			'Being a great cheerleader',
			'Banana bread',
			'Getting me into classical music',
			'Going on bike rides with me',
			'Buying me a tardis blanket for finishing freshman year',
			'Teaching me social cues',
			'Waking up to take care of us when we were babies',
			'All the times you drove me back to school to get something I had forgotten',
			'Driving me all the way to Long Island so I can visit Doctor Foley',
			'Best food ever',
			'Shoveling snow',
			'Getting me fresh bagels',
			'The way you smell',
			'Getting me stuffed animals ',
			'Fighting for me when I couldn’t fight for myself',
			'Knowing you’ll be there for me',
			'Helping me get into awesome summer programs',
			'Never letting me bring myself down',
			'Celebrating our birthdays more than your own',
			'Hugs!!!!',
			'Waking me up when my alarm didn’t go off',
			'Fried chicken',
			'Having the best matzo ball soup. And brisket. Basically any Jewish food dish.',
			'Teaching me how to swim',
			'Taking me to awesome Broadway plays',
			'Not secretly being an alien spy (or are you?!)',
			'Helping me believe in myself',
			'Buying me lots of food (keep doing that)',
			'Helping me fall asleep when I can’t fall asleep',
			'Not killing me when I’m a klutz and break things :)',
			'You are my sunshine, my only sunshine',
			'If something didn’t help me, keeping trying till something did',
			'Letting me sleep in when I could',
			'When we would lie in your bed on weekends when we were little',
			'Paying for the whole “college” thing',
			'Being awesome',
			'Helping me on last-minute school work that I shouldn’t have left to the last minute',
			'When you give me your leftovers (especially Chipotle)',
			'Made sure we always wore jackets',
			'Helps me when I’m sick',
			'Checking up on me all the time to make sure I’m ok',
			'Your love of animals',
			'You let me drive the Rav and sometimes Genisis',
			'Supporting me through good and bad',
			'Always giving me good advice',
			'Helping us appreciate books',
			'Your tendrils of doom',
			'SO MANY CHANUKAH PRESENTS',
			'Lots of food :)',
			'You taught me how to drive',
			'For being strong',
			'Taking me to the library',
			'Telling me I’d be successful, even when I wasn’t doing well',
			'Telling me awesome stories',
			'Being a mama bear',
			'Letting me eat icing ',
			'Taking me to early morning blood tests, then brunch afterwards',
			' Giving me awesome birthday parties',
			'Pushing me to be to the best me I could be',
			'Making me omelettes and pancakes and french toast on weekends even though you don’t have that much time',
			'Helping me with schoolwork',
			'Understanding when I didn’t want to play clarinet anymore',
			'Every time you took me to the doctor',
			'Making long car rides fun',
			'You will always be my mommy',
			'Buying me clothes that you’d think I’d like when I’m not even there',
			'Being busy but always being there',
			'Sewing/gluing/magically fixing stuff ',
			'Getting me all of the soft things',
			'Your writing ability',
			'Being there when I’m puking or pooping everywhere',
			'Ploog',
			'Being understanding',
			'Being a smart cookie',
			'Changing my diapers',
			'Getting me braces (a necessary evil)',
			'Had at least some factor in creating my awesomeness',
			'Kissing me goodnight when I was little',
			'When you give me your food when we go out to eat',
			'All the memories we have made together',
			'Helping me pack',
			'Your laugh',
			'The innumerous amount of things that you have taught us',
			'Helping me get my awesome job at CipherHealth',
			'Being there when we’re sick',
			'Making me eat vegetables',
			'Letting the nerd in me grow',
			'“If anything happened to you..”',
			'For being a great daughter',
			'You are the best mom ever',
			'Teaching us good morals',
			'Helping me with homework',
			'Taking us to Florida',
			'Helping me set up my own tag sales',
			'Getting me new glasses when I needed them',
			'Keeping us connected to Judaism',
			'Putting up with me always asking when dinner is',
			'Driving during long car rides',
			'Drawing pictures on napkins and placemats at diners',
			'Believing in me',
			'Loves to listen to me brag',
			'Taking me to movies',
			'Because it’s not even hard to think of all these reasons',
			'Giving me confidence to be myself',
			'Kitties!',
			'Loving us no matter what',
			'Listens to me',
			'Buying me all my meds',
			'Read Harry Potter and The Hobbit and other awesome books to me as a kid',
			'We are lucky to have such good lives because of you',
			'Your genes (and your jeans)',
			'Giving me an allowance',
			'Letting me build models even though I made a mess',
			'Never giving up on me',
			'Teaching us to be grateful for the life we have',
			'Taking me swimming',
			'Letting me sit in the front seat',
			'Always worrying about me',
			'Making sure I got enough sleep',
			'Reading to us when we were little',
			'Making me soup when I was sick',
			'For working at home so that she could be there for us',
			'Being a beacon of light when all is dark',
			'Taking me out to fancy dinners',
			'Kissing me good night',
			'Taking me to doctor appointments',
			'Sending me things you think I’d find interesting',
			'Letting me nerd out even though you have no idea what I’m talking about',
			'Showing us the importance of family',
			'Your voice',
			'Bringing us to musicals',
			'Your artistic ability',
			'Making our house/apartment look awesome on Halloween',
			'Helping me do community service',
			'Paying for everything, including most of college',
			'Buying ridiculous amounts of action figures (that let me be creative)',
			'Convincing me to go to the life-changing Summit Camp',
			'You’ve never forgotten a birthday (unless I was little and didn’t know, in which case, bleh)',
			'Always makes time for me',
			'You put our happiness before yours',
			'Loving me unconditionally',
			'Introducing me to your awesome friends',
			'365 reasons why we love you',
			'Dance parties',
			'Being an awesome mom!',
			'Giving me warm sheets right out of the dryer to cuddle with',
			'Buying me board games',
			'You can never be mad at me for too long',
			'Making me laugh',
			'Inspiring me',
			'Persevering through dark times',
			'Letting us sleep in',
			'Cuddling',
			'Chinese food and movies on Christmas',
			'You put up with us being annoying',
			'Your creativity',
			'Knowing you would protect me with your life',
			'Helping me get the MSA (and I guess kinda CipherHealth) internship',
			'Working at a job she hates because she wants to support us',
			'Making my bed in the morning when I was a kid',
			'You made us eat our fruits and vegetables',
			'Buying me all of the study books',
			'Making me awesome cakes for my birthdays',
			'Caring for me all these years',
			'Presents',
			'Going through childbirth',
			'Helping me draw that robin drawing which won the magazine contest',
			'Giving me your desserts at restaurants',
			'Changing my diaper! Yay poop!',
			'Making an awesome bar mitzvah party for me',
			'Helping me organize my closet and my room',
			'Making sure I’m on the right track',
			'Giving me relationship advice',
			'Buying desserts for me even though you’re on a diet',
			'Making me that awesome grim reaper Halloween costume',
			'Keeping care of an awesome garden',
			'Her work ethic',
			'I know you love me',
			'Making me smile',
			'Sticking up for me',
			'Taking your own time to help me',
			'Letting us stay home when we were sick',
			'Giving me fashion advice, because I’m totally hopeless',
			'Teaching me to always write thank you notes',
			'Always thinking of me',
			'Letting me know when I talk too fast',
			'Paying for college',
			'Asking how our day was',
			'Understanding me',
			'Who you’ve helped me become',
			'For staying close with Mindy and being a good sister',
			'Looking out for me',
			'Giving me lots of cute polar bear things',
			'Being the best mom forever and ever and ever',
			'Taking us to the movies',
			'Literally wouldn’t be here without you',
			'Always supportive of me',
			'Making me lunches',
			'Pretending to care about soccer',
			'Drawing competitions in restaurants',
			'When I was sick and would wake you up in the middle of the night',
			'All the times you left work to drive me home from school',
			'Everything I am is because of you',
			'Genuinely caring about me',
			'Playing games with me even though that’s not really your thing',
			'Playing with us when we were little',
			'Driving me to school',
			'Being awesome during blackouts',
			'Buying me nice dress clothes',
			'Making me laugh',
			'Giving me the truth when I need it',
			'Always know what’s best for me',
			'Not eating me as baby (like a hamster, Google it)',
			'Picking me up when I’m down',
			'Playing gin rummy with me',
			'Being a good storyteller',
			'Always trying new things',
			'For being supportive',
			'Editing my school work',
			'Trying to actually understand what I’m saying',
			'Taught me how to be a good person',
			'Trusting my opinion',
			'Listening to all the nerdy things I say to make me happy',
			'When I was little and scared at night you would sit with me',
			'Working hard at a job you hate every day to pay for everything you do for me ',
			'YEARS AND YEARS OF LAUNDRY',
			'Getting up early to drive us to school or soccer practice',
			'Cleaning my dorm room',
			'Telling me my artwork is good (even though it usually isn’t)',
			'When I would walk on your feet and we would waddle around',
			'Making our home beautiful',
			'Healing me',
			'Making huge awesome meals during holidays by yourself no matter how much work it is',
			'Sharing your love for nature',
			'Being a great wife to dad',
			'Taking me for haircuts',
			'Cheesecake',
			'Letting me go to WPI even though it was more expensive',
			'Will always love me no matter what',
			'Making me feel lucky to have a mom like you',
			'Leaving me alone when I need it',
			'Your cooking',
			'Taking me to tag sales',
			'Trying to keep me healthy',
			'Our bike rides',
			'Making me spaghetti and meatballs to celebrate something',
			'Making sure I’m healthy',
			'Being patient with me',
			'Putting up with my singing',
			'You survive being the only girl in the house (besides the kitties)',
			'Staying close with your best friends ',
			'Carrying me around for 9 months',
			'How you can get the cats in when no  one else can and hope is lost',
			'Doing my disgusting soccer laundry',
			'Waiting with me outside Space Mountain because I didn’t want to go on it',
			'Getting me more hoodies than I’ll ever need :)',
			'Buying us material goods! Yay!',
			'Singing me lullabies when I was little',
			'Taking lots of awesome (and silly) pictures of me',
			'Putting up with not one, but two teenage boys',
			'Sewing my stuff',
			'Nagging because you care (but I still don’t like it)',
			'Defend me',
			'Forgives me no matter what',
			'Putting up with my obsessions',
			'Surprises me with presents and food and hugs and awesomeness',
			'Sending me off to fun/educational summer camps',
			'When you wear a cozy shirt and it adds to the coziness of your hugs to reach unparalleled levels of coziness',
			'Your sense of humor',
			'Your ability to birth legends',
			'Always knowing the right thing to say when I’m down',
			'YOU IS SPECIAL',
			'Cleaning up my vomit',
			'Going as a chaperone on field trips',
			'You became interested in the things we were interested in',
			'When you make a meal special for me',
			'Putting up with me :)',
			'Buying me supplies for my DIY projects',
			'Never gave up on me, even when times were tough',
			'Taught us good manners',
			'Wanting to see us succeed',
			'I can never be mad at you for too long',
			'Helping with school projects, especially those that required art (cuz I can’t draw)',
			'Letting me be myself',
			'Sending me really cool articles',
			'Teaching me how to be a New Yorker'
		]
	    const birthday = new Date('09/19/2020');
	    const diffTime = Math.abs(birthday - today);
	    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	    if (diffDays > 366) {
	    	diffDays = diffDays - (Math.floor(diffDays / 366) * 366)
	    }
	    var image = document.createElement("IMG")
	    image.setAttribute('src', './kittens/cat' + Math.ceil(diffDays / 1.85) + '.jpeg');
	    image.classList.add('image');
	    document.getElementById('kitten').appendChild(image);
	    document.getElementById('love-reason').innerHTML = reasons[diffDays - 1];
}
