import Link from "next/link"

import {
  Grid,
  Section,
  Text
} from '../components/ui'

const Announcement = ({key, date, message, link}) => {
  return (
    <Grid container key={key}>
      <Grid item xs={12} sm={4}><Text italic p link={link}>{date}</Text></Grid>
      <Grid item xs={12} sm={8}><Text p link={link}>{message}</Text></Grid>
    </Grid>
  )
}

const Introduction = () => {
  return (
    <Section isPageTop>
      <Grid container>

        <Grid item xs={12} sm={6} />

        <Grid item xs={12} sm={6}>
          <Grid container spacing={4}>

            <Grid item xs={12}>
              <Text display>Figure Press is a publishing project that uses the form of the book, and the processes of its production, to develop and sustain practices for thinking, making, and collaborating. Rigorously imprecise, and decidedly open-ended, Figure Press eagerly examines the process of bringing delicate new ideas to form. Through close collaboration, friendly critique, and often intentionally prolonged conversation, Figure Press provides a framework to support and sustain artistic development and intellectual curiosity in the face of practical demands.</Text>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <Text bold p>Books in Preparation</Text>
                </Grid>
              </Grid>
              {InPreparation.map((p, i) =>
                <Grid container key={i}>
                  <Grid item xs={12} sm={4}><Text italic>{p.author}</Text></Grid>
                  <Grid item xs={12} sm={8}><Text>{p.title}</Text></Grid>
                </Grid>
              )}
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <Text bold p>Announcements</Text>
                </Grid>
              </Grid>
              {Announcements.map((a, i) =>
                a.link ?
                <Link href="#figures">
                  <Announcement key={i} date={a.date} message={a.message} link={a.link}/>
                </Link>
                :
                <Announcement key={i} date={a.date} message={a.message}/>
              )}
            </Grid>

          </Grid>
        </Grid>

      </Grid>
    </Section>
  )
}

export default Introduction

const InPreparation = [
  {
    author: "Taylor Zanke",
    // title: "Untitled"
  },
  {
    author: "Matthew Ransom",
    // title: "Untitled"
  }
]

const Announcements = [
  {
    date: "August 2021",
    message: "Figures is available for purchase here on our website.",
    link: "https://www.google.com/"
  },
  {
    date: "May 2021",
    message: "Figures has been sent to print at Brilliant Graphics in Exton, Pennsylvania.",
  },
  {
    date: "December 2020",
    message: "Our debut, self-titled, book Figures is due for release in early 2021. Final designs are underway!",
  }
]
