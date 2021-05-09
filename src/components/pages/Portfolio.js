import React from "react";
import burgerLog from "../images/burger-log.PNG";
import dogtionary from "../images/dogtionary.PNG";
import quiz from "../images/quiz.PNG";
import dashboard from "../images/dashboard.PNG";
import fitnessWitness from "../images/fitness-witness.png";
import budgetBuddy from "../images/budgetbuddy.png";

function Portfolio() {
  return (
    <div class="container p-3 mb-5 bg-success">
    <div class="row">
      <div class="col-md-12 text-light">
        <h2>Below are a few projects with their deployed links and repos.</h2>
      </div>
    </div>

    <div class="row justify-content-around mb-5">
      <div class="card bg-light col-md-8 gy-5">
        <h3 class="pt-3">Fitness Witness</h3>
          <p>
            The <a href="https://gentle-earth-60379.herokuapp.com/" alt="Fitness Witness deployed project.">Fitness Witness</a> provides a way to keep track of workouts and progress.
          </p>
          <img src={fitnessWitness} class="img-fluid rounded px-3 mb-3" alt="Screenshot of Burger log site displaying a panel for already eaten burgers and burgers on the to-eat list."></img>
          <p>
            See the code behind the magic in the <a href="https://github.com/bmcleod12/fitness-witness" alt="Fitness Witness repo.">Fitness Witness Repo</a>.
          </p>
      </div>
      <div class="card bg-light col-md-8 gy-5">
        <h3 class="pt-3">24/7 Budget Buddy</h3>
          <p>
            The <a href="https://intense-hollows-48841.herokuapp.com/" alt="24/7 Budget Buddy deployed project.">24/7 Budget Buddy</a> gives you the option to track you incoming and outgoing expenses whether you are online or offline.
          </p>
          <img src={budgetBuddy} class="img-fluid rounded px-3 mb-3" alt="Screenshot of Burger log site displaying a panel for already eaten burgers and burgers on the to-eat list."></img>
          <p>
            See the code behind the magic in the <a href="https://github.com/bmcleod12/24-7_Budget-Buddy" alt="Budget Buddy repo.">Budget Buddy Repo</a>.
          </p>
      </div>
      <div class="card bg-light col-md-8 gy-5">
        <h3 class="pt-3">Burger Log</h3>
          <p>
            The <a href="https://frozen-hollows-62628.herokuapp.com/" alt="Burger Log deployed project.">Burger Log</a> gives you a place to keep track of burgers you have eaten or would like to eat.
          </p>
          <img src={burgerLog} class="img-fluid rounded px-3 mb-3" alt="Screenshot of Burger log site displaying a panel for already eaten burgers and burgers on the to-eat list."></img>
          <p>
            See the code behind the magic in the <a href="https://github.com/bmcleod12/good-burger" alt="Burger Log repo.">Burger Log Repo</a>.
          </p>
      </div>
      <div class="card bg-light col-md-8 gy-5">
        <h3 class="pt-3">Dogtionary</h3>
          <p>
            The <a href="https://kcnancy.github.io/Dogtionary/" alt="Dogtionary deployed project.">Dogtionary</a> helps you find dogs in your area in need of a home and displays information about a breed for your consideration.
          </p>
          <img src={dogtionary} class="img-fluid rounded px-3 mb-3" alt="Screenshot of Dogtionary site displaying a black lab available for adoption."></img>
          <p>
            See the code behind the magic in the <a href="https://github.com/kcnancy/Dogtionary" alt="Dogtionary repo.">Dogtionary Repo</a>.
          </p>
      </div>
      <div class="card bg-light col-md-8 gy-5">
        <h3 class="pt-3">Harry Potter Quiz</h3>
          <p>
            This <a href="https://bmcleod12.github.io/queen-of-the-quiz/" alt="Deployed Harry Potter Quiz project.">Harry Potter Quiz</a> tests your knowledge of the wizarding world with a timed and scored series of questions.
          </p>
          <img src={quiz} class="img-fluid rounded p-3 mb-3" alt="Screenshot of Harry Potter quiz question."></img>
          <p>
            See the code behind the magic in the <a href="https://github.com/bmcleod12/queen-of-the-quiz" alt="Harry Potter Quiz repo.">Harry Potter Repo</a>.
          </p>
      </div>
      <div class="card bg-light col-md-8 gy-5">
        <h3 class="pt-3">Weather Dashboard</h3>
          <p>
            <a href="https://bmcleod12.github.io/light-as-a-weather/" alt="Deployed Weather Dashboard project." >Weather Dashboard</a> helps you prepare for today and the next 5 days.
          </p>
          <img src={dashboard} class="img-fluid rounded p-3 mb-3" alt="Screenshot of dashboard displaying today's weather for New York, and the weather for the next 5 days."></img>
          <p>
            See the code behind the magic in the <a href="https://github.com/bmcleod12/light-as-a-weather" alt="Weather Dashboard repo.">Weather Dashboard Repo</a>.
          </p>
      </div>
    </div>
  </div>
  );
}

export default Portfolio;
