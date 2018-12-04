function myFunction() {
    document.getElementById("myForm").submit();
}
// q & a 
   
var allQs = [
   
  {
    question: "Who is famous for cooking chilli?",
  choices: ["Kevin", "Pam", "Michael", "Jan"],
  answer: 1
},{
  question: "Who is nicknamed Big Tuna?",
  choices: ["Michael", "Jim", "Pete", "Stanley"],
  answer: 2
},{
    question: "What does Michael press into the cement?",
  choices: ["Sea-Shell", "Hand Prints", "Office Supplies", "His face"],
  answer: 4
},{
    question: "Who does Jim have a crush on?",
  choices: ["Jan", "Andy", "Pam", "Erin"],
  answer: 3
},{
    question: "What part of Michael Scott's body did he burn?",
  choices: ["Hand on an oven", "Foot on a grill", "Back on a tanning-bed", "Arm on a lightbulb"],
  answer: 2
},{
    question: "What kind of farm does Dwight have?",
  choices: ["Corn", "Blueberry", "Beets", "Dairy Cow"],
  answer: 3
},{
    question: "Which bear is best?",
  choices: ["Polar Bear", "Grizzly", "Panda Bear", "False, Black Bear"],
  answer: 4
}
];



var submitBtn = document.getElementById('myBtn');
var currentQuestion = 0;
var tally = 0;
var minutes = 0;
var seconds = 0;
var quizForm = document.getElementById('quiz');
var question;
var choices;
var radioButtons = document.getElementsByName('radioOption');
var index = 0;

function firstFunc() {
  if (currentQuestion === 0) {
      submitBtn.value = "START";
  }
}

function askQuestion () {
  choices = allQs[currentQuestion].choices;
  question = allQs[currentQuestion].question;
  if (currentQuestion < allQs.length) {
      submitBtn.value = "Next";
      quizForm.innerHTML = "<h1>" + question + "</h1>";
      for (var i = 0; i < choices.length; i++) {
          quizForm.innerHTML += "<label><input type='radio' name='radioOption' value='" + choices[i] + "'/>" + choices[i] + "</label>";
      }
      if (currentQuestion == allQs.length - 1) {
          submitBtn.value = "Submit";
      } else if (currentQuestion > allQs.length - 1) {
          calcQuiz();
      }
      $(".container").append(allQs)
  }
}

function lookForChecked() {

  if (radioButtons.length > 1) {

          var checked = false;
      for (var i = 0; i < radioButtons.length; i++) {
          var selection = radioButtons[i];

           if (selection.checked) {

              var index = [i];
              if (i === allQs[currentQuestion].correctAnswer) {
                  tally++;

              }
              if (currentQuestion < allQs.length -1) {
                  currentQuestion++;

              } else {
                  console.log('you have ended the quiz');
                  calcQuiz();
                 return false;
              }
              break;
          }
      }
      if ($('input[name="radioOption"]:checked').length < 1) {
          alert('Please Make a Selection');
      }
  }
      askQuestion(); {}
}

function calcQuiz() {
  quizForm.innerHTML = "<h1>You have finished the quiz</h1><p class='total'>You scored a total of " + tally + " out of " + allQs.length + "</h1>";
  submitBtn.remove();
}
window.onload = firstFunc();
submitBtn.addEventListener('click', lookForChecked);

function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "countdown's over!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 30000;
    updateTimer();
}

countdown( "countdown", 1, 5 );
