$(document).ready(function() {
  const randomIndex = Math.floor(Math.random() * (userData.length - 1) + 1)       
  const randomUser = userData.find(user => user.id === randomIndex)
  const user = new User(randomUser);
  const users = new UserRepo(userData);
  const hydro = new Hydration(hydrationData);
  const sleep = new Sleep(sleepData);
  const activity = new Activity(activityData);
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()
  //   const todaysDate = year + "/" + "0" + month + "/" + "0" + day;
  const today = "2019/07/10"

  console.log(hydro.fluidOzsPerDay(randomIndex, today))
  console.log(hydro.userFluidsPerWeek(randomIndex, today))

  $('.user-name').text(`${user.returnFirstName(randomUser)}`)
  $('#user-address').text(`Address: ${user.randomUser.address}`)
  $('#user-email').text(`Email: ${user.randomUser.email}`)
  $('#user-stride').text(`Your stride length is ${user.randomUser.strideLength}`)
  //   $('#user-stepGoal').text(`Your daily step goal is set to ${user.randomUser.dailyStepGoal} steps.`)
  //   $('#avg-stepGoal').text(`The average step goal among all users is ${users.averageGoalSteps()}.`)

  $('#daily-water').text(`Today you have consumed ${hydro.fluidOzsPerDay(randomIndex, today)} ounces of water.`)
  $('#weekly-water').text(`In the past week, you've consumed the following amounts of water per day ${hydro.userFluidsPerWeek(randomIndex, today)}.`)
  //   console.log(`${Object.keys(hydro.userFluidsPerWeek(randomIndex, today))}`)


  const userVsAvg = new Chart($('#user-vs-avg-steps'), {
    type: 'bar',
    data: {
      labels: ['Your Steps', 'Average User Steps'],
      datasets: [{
        label: 'Steps',
        data: [user.randomUser.dailyStepGoal, users.averageGoalSteps()],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: 'You VS Everyone (steps)'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  const weeklyWaterIntake = new Chart($('#weekly-water-intake'), {
    type: 'line',
    data: {
      labels: ["2019/07/03", "2019/07/04", "2019/07/05", "2019/07/60", "2019/07/07", "2019/07/08", "2019/07/09"],
      datasets: [{
        label: 'Your Weekly Water Intake (fl Oz)',
        data: hydro.userFluidsPerWeek(),
        backgroundColor: [                
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(90, 173, 226, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(90, 173, 226, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
        legend: {display: false},
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });



})

