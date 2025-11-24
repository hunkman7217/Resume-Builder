import { Grid, Box } from "@mui/material";
import HomePage from "./Home";

/**
 * About Page Component
 *
 * This page displays information about the Resume Builder platform,
 * including its purpose, mission, and social media links.
 * The Navbar (HomePage component) is reused across all pages.
 */
export default function About() {
  return (
    <>
      {/* Global Navbar */}
      {/* The HomePage component contains the navigation bar used across all pages */}
      <HomePage />

      <div className="mt-16 px-10">
        <Grid container spacing={2} alignItems={"center"}>

          {/* ===================== Left Section: Title & Description ===================== */}
          <Grid size={{ xs: 12, md: 8 }}>

            {/* Page Heading */}
            <h1 className="font-bold text-4xl mb-6">
              Resume <br />
              <span className="border-b-9 border-amber-600 rounded-br-3xl text-amber-700">
                Builder
              </span>
            </h1>

            {/* About Page Description */}
            <p className="text-justify font-medium text-gray-700 leading-relaxed italic">
              Welcome to <b>Resume Builder,</b> your one-stop destination for
              creating modern, professional, and job-winning resumes with ease.
              In today’s fast-paced world, first impressions matter — and your
              resume is often the first glimpse an employer gets of your
              potential. At Resume Builder, we aim to bridge the gap between
              your talent and opportunity by offering an effortless, intuitive,
              and beautifully designed platform that helps you craft the perfect
              resume in just a few clicks.
              <br /><br />
              Our mission is to empower students, job seekers, and professionals
              from all backgrounds to express their skills, experiences, and
              aspirations through thoughtfully designed templates that reflect
              individuality and professionalism. Whether you’re a fresh graduate
              stepping into the corporate world, a creative mind searching for
              your dream design role, or an experienced professional aiming to
              elevate your career, Resume Builder provides templates tailored to
              every industry and ambition.
              <br /><br />
              At Resume Builder, we believe that a well-made resume is more
              than a document — it’s your personal story told with confidence.
              Start your journey with us today and take the first step toward
              building not just a resume, but a powerful representation of your
              professional identity.
            </p>

            {/* Share Section */}
            <h3 className="font-bold mt-5">Share With Your Friends!!!</h3>

            {/* Social Media Icons */}
            {/* Links help users connect or share our platform on social platforms */}
            <Box className="flex gap-3 mt-2">
              <a href="https://www.linkdin.com">
                <img src={"Linkedin.png"} className="w-9" />
              </a>

              <a href="https://www.instagram.com">
                <img src={"instaIcon.svg"} className="w-10" />
              </a>
            </Box>

          </Grid>

          {/* ===================== Right Section: Image ===================== */}
          <Grid size={{ xs: 12, md: 4 }} className="flex justify-center">
            <img
              src={"About.jpg"}
              alt="About Us Illustration"
              className="rounded-2xl shadow-lg w-full max-w-sm"
            />
          </Grid>

        </Grid>
      </div>
    </>
  );
}
