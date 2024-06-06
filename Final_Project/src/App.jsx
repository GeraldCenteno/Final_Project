import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <div>
        <main>
          <article>
          <h2>Start your motorcycling journey here!</h2>
              
          <p>So, are you interested in riding a motorcycle in Washington state? If you are, and you are not sure where to start, you are not alone. The training options and the laws are wonderfully confusing.</p>

          <p>My goal here is to condense training paths down to levels, and provide you with some direction. Read the description of each skill level below. Match your skill to the lowest level, and move up from there. The training path is that simple! The only prerequisite is <strong>you must be able to ride a bicycle</strong>. If you can't balance on a bicycle, you can't balance on a motorcycle! Remember, the most important motorcycling maneuver is making it home at the end of the day.</p>

          <p>I will also introduce you to the laws you need to be familiar with to ride in Washington. There are six RCWs and one WAC you need to be aware of.</p>

          <p>If you happen to be active duty Navy or Marine Corps, there are additional requirements for you to ride.</p>

          <h4>Level 0</h4>
          <p>If you have <strong>never seen a motorcycle up close</strong>, this is your level. You will be familiarized with the controls and learn how to properly operate a clutch and motorcycle manual transmission. Click <a href="/level0">here</a> for more details.</p>  

          <h4>Level 1</h4>
          <p>If you have always wanted to ride a motorcycle and are looking to start, this is your level. Here you will learn the <strong>basics</strong>, leading up to qualifying for a learner's permit in Washington. Click <a href="/level1">here</a> for more details.</p>

          <h4>Level 2</h4>
          <p>If you have some experience riding but <strong>need a permit</strong>, this is your level. You will jump straight into knowledge test discussion and the practical exercises, leading up to qualifying for a learner's permit in Washington. Click <a href="/level2">here</a> for more details.</p>

          <h4>Level 3</h4>
          <p>If you have a valid permit and no longer have to consciously think about controls, this is your level. This level will give you the additional skills needed leading up to qualifying for an <strong>endorsement</strong> in Washington. It is recommended that you have at least 1000 miles of experience on your permit before taking an endorsement level course. Click <a href="/level3">here</a> for more details.</p>

          <h4>Level 4</h4>
          <p>So you've been riding around, but are still a basic skills level rider. This level teaches you <strong>additional skills</strong> to be an effective day-to-day rider. Click <a href="/level4">here</a> for more details.</p>

          <h4>Level 5</h4>
          <p>Whoa, bubba...you can really handle yourself on the streets and on the freeways. Time to level up. This level is for those ready for <strong>more challenging</strong> riding. Click <a href="/level5">here</a> for more details.</p>

          <h4>The Law</h4>
          <p>Know Washington State law for motorcycle riders. Click <a href="/thelaw">here</a> for more details.</p>

          <h4>Active Duty Navy</h4>
          <p>Are you active duty Navy or Marine Corps? You have additional requirements to follow. Click <a href="/opnav">here</a> for more details.</p>
          </article>

          <aside>
            <br>
            <img src="project_files/course.jpg" alt="Motorcycle Training Course" onmouseover="this.src='project_files/PeeweeHerman.jpg'" onmouseout="this.src='project_files/course.jpg'">
            <p>These students are enjoying cornering practice.</p>
            <br>
            <br>
            <video id="videoplayer" src="project_files/start.mp4" controls width="600" poster="project_files/kawi.png" preload="auto"></video>
            <br>
            <p>Let's get things started...</p>
          </aside>
        </main>
        </div>

        <footer>
          <p>This site has been tested on Google Chrome 125.0.6422.113, Microsoft Edge 125.0.2535.79, and Mozilla Firefox 126.0.1</p>
        </footer>

    </>
  )
}

export default App
