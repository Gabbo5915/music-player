$(document).ready(function() {
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
  });
});
$(".song").on("click", function() {
  var name = this.innerText;
  if (name === "New Soul") {
    $("body").css("background", "lightseagreen");
    $(".navbar").css("background", "lightseagreen");
    $("img").attr("src", "cover1.jpg");
    var x = $("#myaudio");
    $("#mp3_src").attr("src", "audio1.mp3");
    x[0].pause();
    x[0].load();
    $("#lyric").html(
      "\
        <p>I'm a new soul, I came to this strange world</p>\
        <p>Hoping I could learn a bit 'bout how to give and take</p>\
        <p>But since I came here, felt the joy and the fear</p>\
        <p>Finding myself making every possible mistake</p>\
        <p>La-la la la, la-la-la-la la la</p>\
        <p>La-la-la-la la, la-la la, la-la la</p>\
        <p>La-la la la, la-la-la-la la la</p>\
        <p>La-la-la-la la, la-la la, la-la la</p>\
        <p>See I'm a young soul in this very strange world</p>\
        <p>Hoping I could learn a bit 'bout what is true and fake</p>\
        <p>But why all this hate? Try to communicate</p>\
        <p>Finding trust and love is not always easy to make</p>\
        <p>La-la la la, la-la-la-la la la</p>\
        <p>La-la-la-la la, la-la la, la-la la</p>\
        <p>La-la la la, la-la-la-la la la</p>\
        <p>La-la-la-la la, la-la la, la-la la, ooh</p>\
        <p>This is a happy end 'cause you don't understand</p>\
        <p>Everything you have done, why is everything so wrong?</p>\
        <p>This is a happy end, come and give me your hand</p>\
        <p>I'll take you far away</p>\
        <p>I'm a new soul, I came to this strange world</p>\
        <p>Hoping I could learn a bit 'bout how to give and take</p>\
        <p>But since I came here, felt the joy and the fear</p>\
        <p>Finding myself making every possible mistake</p>\
        <p>La-la la la, la-la-la-la la la</p>\
        <p>(New soul)</p>\
        <p>La-la-la-la la, la-la la, la-la la</p>\
        <p>(In this very strange world)</p>\
        <p>La-la la la, la-la-la-la la la</p>\
        <p>(Every possible mistake)</p>\
        <p>La-la-la-la la, la-la la, la-la la</p>\
        <p>(Possible mistake)</p>\
        <p>La-la la la, la-la-la-la la la</p>\
        <p>(Every possible mistake)</p>\
        <p>La-la-la-la la, la-la la, la-la la</p>\
        <p>La-la la la, la-la-la-la la la</p>\
        <p>La-la-la-la la, la-la la, la-la la</p>\
    "
    );
  }
  if (name === "Remember the Name") {
    $("body").css("background", "darkred");
    $(".navbar").css("background", "darkred");
    $("img").attr("src", "cover2.jpg");
    var x = $("#myaudio");
    $("#mp3_src").attr("src", "audio2.mp3");
    x[0].pause();
    x[0].load();
    $("#lyric").html(
      "\
        <p>You ready?! Let's go!</p>\
        <p>Yeah, for those of you that wanna know what we're all about</p>\
        <p>It's like this y'all (c'mon)</p>\
        <p>This is ten percent luck</p>\
        <p>Twenty percent skill</p>\
        <p>Fifteen percent concentrated power of will</p>\
        <p>Five percent pleasure</p>\
        <p>Fifty percent pain</p>\
        <p>And a hundred percent reason to remember the name</p>\
        <p>He doesn't need his name up in lights</p>\
        <p>He just wants to be heard whether it's the beat or the mic</p>\
        <p>He feels so unlike everybody else, alone</p>\
        <p>In spite of the fact that some people still think that they know him</p>\
        <p>But fuck 'em, he knows the code, it's not about the salary</p>\
        <p>It's about reality and making some noise</p>\
        <p>Making a story, making sure his clique stays up</p>\
        <p>That means when he puts it down, Tak's pickin' it up</p>\
        <p>Who the hell is he anyway, he never really talks much</p>\
        <p>Never concerned with status but still leavin' them star struck</p>\
        <p>Humbled through opportunities given despite the fact</p>\
        <p>That many misjudge him because he makes a livin' from writing raps</p>\
        <p>Put it together himself, now the picture connects</p>\
        <p>Never asking for someone's help, or to get some respect</p>\
        <p>He's only focused on what he wrote; his will is beyond reach</p>\
        <p>And now it all unfolds, the skill of an artist</p>\
        <p>This is twenty percent skill, eighty percent beer</p>\
        <p>Be a hundred percent clear 'cause Ryu is ill</p>\
        <p>Who would've thought that he'd be the one to set the west in flames</p>\
        <p>Then heard him wreckin' with The Crystal Method, Name Of The Game</p>\
        <p>Came back, dropped Megadef, took 'em to church</p>\
        <p>I like bleach, man, Ryu had the stupidest verse</p>\
        <p>This dude is the truth, now everybody be givin' him guest spots</p>\
        <p>His stock's through the roof; I heard he fuckin' with S-Dot</p>\
        <p>This is ten percent luck</p>\
        <p>Twenty percent skill</p>\
        <p>Fifteen percent concentrated power of will</p>\
        <p>Five percent pleasure</p>\
        <p>Fifty percent pain</p>\
        <p>And a hundred percent reason to remember the name</p>\
        <p>They call him Ryu he's sick, and he's spittin' fire and Mike</p>\
        <p>Got him out the dryer he's hot, found him in Fort Minor with Tak</p>\
        <p>What a fuckin' nihilist porcupine; he's a prick; he's a cock</p>\
        <p>The type women want to be with and rappers hope he get shot</p>\
        <p>Eight years in the makin' patiently waitin' to blow</p>\
        <p>Now the record with Shinoda's takin' over the globe</p>\
        <p>He's got a partner in crime; his shit is equally dope</p>\
        <p>You won't believe the kind of shit that comes out of this kid's throat</p>\
        <p>He's not your every day on the block</p>\
        <p>He knows how to work with what he's got</p>\
        <p>Makin' his way to the top</p>\
        <p>He often gets a comment on his name</p>\
        <p>People keep asking him was it given at birth</p>\
        <p>Or does it stand for an acronym?</p>\
        <p></p>No, he's livin' proof that he rockin' the booth</p>\
        <p>He'll get you buzzin' quicker than a shot of vodka with juice</p>\
        <p>Him and his crew are known around as one of the best</p>\
        <p>Dedicated to what they do and give a hundred percent</p>\
        <p>Forget Mike, nobody really knows how or why he works so hard</p>\
        <p>It seems like he's never got time</p>\
        <p>Because he writes every note and he writes every line</p>\
        <p>And I've seen him at work when that light goes on in his mind</p>\
        <p>It's like a design is written in his head every time</p>\
        <p>Before he even touches a key or speaks in a rhyme</p>\
        <p>And those motherfuckers he runs with, the kids that he signed</p>\
        <p>Ridiculous, without even trying, how do they do it?</p>\
        <p>This is ten percent luck</p>\
        <p>Twenty percent skill</p>\
        <p>Fifteen percent concentrated power of will</p>\
        <p>Five percent pleasure</p>\
        <p>Fifty percent pain</p>\
        <p>And a hundred percent reason to remember the name</p>\
        <p>This is ten percent luck</p>\
        <p>Twenty percent skill</p>\
        <p>Fifteen percent concentrated power of will</p>\
        <p>Five percent pleasure</p>\
        <p>Fifty percent pain</p>\
        <p>And a hundred percent reason to remember the name</p>\
        <p>Yeah</p>\
        <p>Fort Minor</p>\
        <p>M-Shinoda</p>\
        <p>Styles of Beyond</p>\
        <p>Ryu</p>\
        <p>Takbir</p>\
        <p>Machine Shop</p>\
    "
    );
  }
});
