'use strict';

/**
 * @ngdoc function
 * @name infernoApp.controller:RxCtrl
 * @description
 * # RxCtrl
 * Controller of the infernoApp
 */
angular.module('infernoApp')
  .controller('RxCtrl', function ($scope) {

       $scope.rxTotalSymbols= 60;
       $scope.rxTotalLHs= 1;
 
       localStorage.setItem("rxTotalSymbols", $scope.rxTotalSymbols);
       localStorage.setItem("rxTotalLHs", $scope.rxTotalLHs);

       $scope.cantoes = [
  {line: 1,  text: "When I had journeyed half of our life's way, I found my self within a shadowed forest, for I had lost the path that does not stray."},
  {line: 4, text:"Ah, it is hard to speak of what it was, that savage forest, dense and difficult, which even in recall renews my fear:"},
  {line: 7, text:"so bitter -- death is hardly more severe! But to retell the good discovered there, I'll also tell the other things I saw."},
  {line: 10, text:"I cannot clearly say how I had entered the wood; I was so full of sleep just at the point where I abandoned the true path."},
  
 {line: 13, text:"But when I'd reached the bottom of a hill -- it rose along the boundary of the valley that had harrassed my heart with so much fear -- "},
  
 {line: 16, text:"I looked on high and saw its shoulders clothed already by the rays of that same planet which serves to lead men stragiht along all roads."},
  
 {line: 19, text:"At this my fear was somewhat quieted; for through the night of sorrow I had spent, the lake within my heart felt terror present."},

 {line: 22, text:"And just as he who, with exhausted breath, having escaped from sea to short, turns back to watch the dangerous water he has quit,"},
  

 {line: 25, text:"so did my spirit, still a fugitive, turn back to look intently at the pass that never has any man survive."},
  
{line: 28, text:"I let my tired body rest awhile.  Moving again, I tried the lonely slope-- my firm foot always was the one below. "},

{line: 31, text:"And almost where the hillside starts to rise-- look there!-- a leopard, very quick and lithe, a leopard covered with a spotted hide."},

{line: 34, text:"He did not disappear from sight, but stayed; indeed, he so impeded my ascent that I had often to turn back again."},


{line: 37, text:"The time was the beginning of the morning; the sun was rising now in fellowship with the same stars that had escorted it"},


{line: 40, text:"when Divine Love first moved those things of beauty; so that the hour and the gentle season gave me good cause for hopefulness on seeing"},


{line: 43, text:"that beast before me with his speckled skin; but hope was hardly able to prevent the fear I felt when I beheld a lion."},


{line: 46, text:"His head held high and ravenous with hunger-- even the air around him seemed to shudder-- this lion seemed to make his way against me."},


{line: 49, text:"And then a she--wolf showed herself; she seemed to carry every craving in her leanness; she had already brought despair to many."},


{line: 52, text:"The very sight of her so weighted me with fearfulness that I abandoned hope of ever climbing up that mountain slope."},


{line: 55, text:"Even as he who glories while he gains will, when the time has come to tally loss, lament with every thought and turn despondent,"},


{line: 58, text:"so was I when I faced that restless beast which, even as she stalked me, step by step had thrust me back to where the sun is speechless."},


{line: 61, text:"While I retreated down to lower ground, before my eyes there suddenly appeared one who seemed faint because of the long silence."},

{line: 64, text:"When I saw him in that vast wilderness, \"Have pity on me,\" were the words I cried, \"whatever you may be--a shade, a man.\""},


{line: 67, text:"He answered me: \"Not man; I once was man.  Both of my parents came from Lombardy, and both claimed Mantua as native city."},


{line: 70, text:" And I was born, though late, sub Julio, and lived in Rome under the good Augustus-- the season of the false and lying gods."}, 

{line: 73, text:" I was a poet, and I sang the righteous son of Anchises who had come from Troy when flames destroyed the pride of Ilium."},


{line: 76, text:" But why do you return to wretchedness?  Why not climb up the mountain of delight, the origin and cause of every joy?\""},


{line: 79, text:"\"And are you then that Virgil, you the fountain that freely pours so rich a stream of speech?\" I answered him with shame upon my brow."},


{line: 82, text:"\"O light and honor of all other poets, may my long study and the intense love that made me search your volume serve me now."},

{line: 85, text:" You are my master and my author, you-- the only one from whom my writing drew the noble style for which I have been honored."},

{line: 88, text:" You see the beast that made me turn aside; help me, o famous sage, to stand against her, for she has made my blood and pulses shudder,\""},


{line: 91, text:"\"It is another path that you must take,\" he answered when he saw my tearfulness, \"if you would leave this savage wilderness;"}, 

{line: 94, text:" the beast that is the cause of your outcry allows no man to pass along her track, but blocks him even to the point of death;"}, 

{line: 97, text:"her nature is so squalid, so malicious that she can never sate her greedy will; when she has fed, she's hungrier than ever."},


{line: 100, text:"She mates with many living souls and shall yet mate with many more, until the Greyhound arrives, inflicting painful death on her."},


{line: 103, text:"That Hound will never feed on land or pewter, but find his fare in wisdom, love, and virtue; his place of birth shall be between two felts."},


{line: 106, text:"He will restore low-lying Italy for which the maid Camilla died of wounds, and Nisus, Turnus, and Euryalus."},


{line: 109, text:"And he will hunt that beast through every city until he thrusts her back again to Hell, for which she was first sent above by envy."},


{line: 112, text:" Therefore, I think and judge it best for you to follow me, and I shall guide you, taking you from this place through an eternal place,"},


{line: 115, text:" where you shall hear the howls of desperation and see the ancient spirits in their pain, as each of them laments his second death;"},


{line: 118, text:" and you shall see those souls who are content within the fire, for they hope to reach-- whenever that may be-the blessed people."},


{line: 121, text:" If you would then ascend as high as these, a soul more worthy than I am will guide you; I'll leave you in her care when I depart,"},


{line: 124, text:"because that Emperor who reigns above, since I have been rebellious to His law, will not allow me entry to His city."},


{line: 127, text:"He governs everywhere, but rules from there; there is His city, His high capital: o happy those He chooses to be there!\""},


{line: 130, text:" And I replied: \"O poet-by that God whom you had never come to know-- I beg you, that I may flee this evil and worse evils,"},


{line: 133, text:" to lead me to the place of which you spoke, that I may see the gateway of Saint Peter and those whom you describe as sorrowful.\""},


{line: 136, text:" Then he set out, and I moved on behind him.  "},

  ];


  });
