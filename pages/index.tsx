import { client } from "@/client";
import { gql } from "@apollo/client";
import { BlockRenderer } from "@/components/BlockRenderer";
import { cleanAndTransformBlocks } from "@/utils/cleanAndTransformBlocks";

export default function Home(props:any) {
  return (
    <div className="w-[90%] mx-auto overflow-hidden max-w-screen-xl">
      <header>
            <nav className="flex h-20 items-center justify-between">
                <a href="./" className="max-w-[200px] w-1/2">
                    <img src="logo.svg" className="block w-full"/>
                </a>
                <input type="checkbox" name="menu" id="menu" className="peer/menu hidden" />
                <label htmlFor="menu" className="w-10 h-10 bg-open-menu bg-cover bg-center bg-green-color rounded-lg cursor-pointer peer-checked/menu:bg-close-menu transition-all z-40 md:hidden"></label>
                <ul className="
                fixed inset-0 bg-menu-color px-[5%] grid gap-6 auto-rows-max content-center

                justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500
                
                md:clip-circle-full 
                md:relative md:grid-flow-col 
                md:p-0 md:bg-transparent">
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    {/* <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact me</a>
                    </li> */}
                </ul>
            </nav>
            <section className="pt-10 pb-16 md:flex md:justify-between md:items-center gap-8">
                <figure className="md:order-1">
                    <img src="image.jpg" alt="Foto de julian gomez" className="w-[90%] aspect-square object-cover rounded-full max-w-sm mx-auto"/>
                </figure>
                <article className="text-center mt-8 md:w-1/2 md:text-left">
                    <h1 className="text-4xl md:text-5xl">Hi, I am Julian Gomez</h1>
                    <p className="text-gray-color text-xl mt-3 mb-6">Fullstack Developer.</p>
                    {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] auto-rows-[60px] gap-8 max-w-lg mx-auto md:mx-0">
                        <a href="#" className="bg-green-color flex items-center justify-center">Download CV</a>
                        <a href="#" className="flex items-center justify-center border border-white">Learn More</a>
                    </div> */}
                </article>
            </section>
        </header>
        <main>
            <section className="py-16 text-center">
                <h2 className="text-4xl md:text-5xl">About</h2>
                <p className="mt-8 mb-16 leading-normal text-gray-color md:w-4/5 md:mx-auto">Software engineer with experience in building web applications.</p>
                <div className="grid gap-8 justify-center justify-items-center md:grid-cols-3">
                    <article className="w-max grid justify-items-center">
                        <div className="icons-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icons"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg>
                        </div>
                        <h3 className="text-2xl mt-4 mb-2">Mail</h3>
                        <p className="font-light">juliangomezes89@gmail.com</p>
                    </article>
                    <article className="w-max grid justify-items-center">
                        <div className="icons-container">
                              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 448 512" className="icons"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                        </div>
                        <h3 className="text-2xl mt-4 mb-2">Linkedin</h3>
                        <p className="font-light">juliangoes89</p>
                    </article>
                    <article className="w-max grid justify-items-center">
                        <div className="icons-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icons"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                        </div>
                        <h3 className="text-2xl mt-4 mb-2">Github</h3>
                        <p className="font-light">juliangoes89</p>
                    </article>
                </div>
            </section>
            <section className="py-16">
                <h2 className="text-4xl text-center mb-16 md:text-5xl">What I do?</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
                    <article className="bg-card-color py-12 px-8 border-b-2 border-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icons w-24"><circle cx="12" cy="11.245" r="1.785"></circle><path d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z"></path><path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z"></path><path d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z"></path><path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z"></path></svg>
                        <h3 className="text-2xl text-gray-color font-medium">Frontend development</h3>
                    </article>
                    <article className="bg-card-color py-12 px-8 border-b-2 border-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icons w-24"><path d="M21.838 8.445c0-.001-.001-.001 0 0l-.003-.004-.001-.001v-.001a.809.809 0 0 0-.235-.228l-9.164-6.08a.834.834 0 0 0-.898 0L2.371 8.214A.786.786 0 0 0 2 8.897v6.16a.789.789 0 0 0 .131.448v.001l.002.002.01.015v.002h.001l.001.001.001.001c.063.088.14.16.226.215l9.165 6.082a.787.787 0 0 0 .448.139.784.784 0 0 0 .45-.139l9.165-6.082a.794.794 0 0 0 .371-.685v-6.16a.793.793 0 0 0-.133-.452zm-9.057-4.172 6.953 4.613-3.183 2.112-3.771-2.536V4.273zm-1.592 0v4.189l-3.771 2.536-3.181-2.111 6.952-4.614zm-7.595 6.098 2.395 1.59-2.395 1.611v-3.201zm7.595 9.311-6.96-4.617 3.195-2.15 3.765 2.498v4.269zm.795-5.653-3.128-2.078 3.128-2.105 3.131 2.105-3.131 2.078zm.797 5.653v-4.27l3.766-2.498 3.193 2.15-6.959 4.618zm7.597-6.11-2.396-1.611 2.396-1.59v3.201z"></path></svg>
                        <h3 className="text-2xl text-gray-color font-medium">Api development</h3>
                    </article>
                    <article className="bg-card-color py-12 px-8 border-b-2 border-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icons w-24"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path></svg>
                        <h3 className="text-2xl text-gray-color font-medium">UI/UX design</h3>
                    </article>
                </div>
            </section>
            <section className="py-16 text-center">
                <h2 className="text-4xl mb-16 md:text-5xl">My Skills</h2>
                <div className="bg-card-color py-12 px-8 text-gray-color grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-12 place-items-center">
                    <article className="space-y-4">
                        <p className="text-5xl font-bold">60%</p>
                        <h3 className="text-green-color text-2xl">Angular/React</h3>
                    </article>
                    <article className="space-y-4">
                        <p className="text-5xl font-bold">70%</p>
                        <h3 className="text-green-color text-2xl">Css/Sass</h3>
                    </article>
                    <article className="space-y-4">
                        <p className="text-5xl font-bold">75%</p>
                        <h3 className="text-green-color text-2xl">C#/.Net/SQL</h3>
                    </article>
                    <article className="space-y-4">
                        <p className="text-5xl font-bold">75%</p>
                        <h3 className="text-green-color text-2xl">JS/TS</h3>
                    </article>
                </div>
            </section>
            {/* <section className="py-16">
                <h2 className="text-4xl mb-16 text-center md:text-5xl">Contact</h2>
                <form className="flex flex-wrap justify-between gap-8 px-1 max-w-screen-lg mx-auto">
                    <input type="text" placeholder="Name" className="border-b px-2 py-4 flex-grow flex-basis-60 focus-input"/>
                    <input type="email" placeholder="E-mail" className="border-b px-2 py-4 flex-grow flex-basis-60 focus-input"/>
                    <textarea name="message" placeholder="Message" id="message" className="border px-4 py-6 min-w-full max-w-full w-full min-h-[100px] max-h-60 focus-input"></textarea>
                    <input type="submit" value="Contact me" className="bg-green-color py-4 px-14 mx-auto cursor-pointer"/>
                </form>
            </section> */}
             <section className="py-16 text-center">
                <h2 className="text-4xl mb-16 md:text-5xl" id="projects">Projects</h2>
                <h3 className="text-4xl mb-16 md:text-4xl">Game Development Unity</h3>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
                    <article className="space-y-4 bg-card-color py-12 px-8 border-b-2 border-transparent">
                        <h2 className="text-3xl font-bold">2D Runner game</h2>
                        <h3 className="text-green-color text-2xl">It is an infinite runner game where you must collect items while avoiding obstacles in a randomly generated level.</h3>
                        <iframe
                          width="500"
                          height="400"
                          src="https://www.youtube.com/embed/6hvnLnUFtdM"
                          frameBorder="0"
                          allowFullScreen
                          style={{
                            textAlign: "center",
                            display: "block",
                            margin: "auto",
                            minWidth: "300px",
                            minHeight: "223px",
                            width: "50%",
                            height: "50%",
                          }}
                        ></iframe>
                    </article>
                    <article className="space-y-4 bg-card-color py-12 px-8 border-b-2 border-transparent">
                       <h2 className="text-3xl font-bold">Dinosaur</h2>
                       <h3 className="text-green-color text-2xl"> It is a virtual pet game where you have to take care of a dinosaur that is a pet</h3>
                       <iframe
                         width="500"
                         height="400"
                         src="https://www.youtube.com/embed/J-65ZSW9-i4"
                         frameBorder="0"
                         allowFullScreen
                         style={{
                           textAlign: "center",
                           display: "block",
                           margin: "auto",
                           minWidth: "300px",
                           minHeight: "223px",
                           width: "50%",
                           height: "50%",
                         }}
                       ></iframe>
                    </article>
                    <article className="space-y-4  bg-card-color py-12 px-8 border-b-2 border-transparent">
                       <h2 className="text-3xl font-bold">Monkey</h2>
                       <h3 className="text-green-color text-2xl">A game where you control a monkey inside a ball with the phone acelerometer</h3>
                       <iframe
                         width="500"
                         height="400"
                         src="https://www.youtube.com/embed/Yt8dgLTb4oM"
                         frameBorder="0"
                         allowFullScreen
                         style={{
                           textAlign: "center",
                           display: "block",
                           margin: "auto",
                           minWidth: "300px",
                           minHeight: "223px",
                           width: "50%",
                           height: "50%",
                         }}
                       ></iframe>
                    </article>
                </div>
                <h3 className="text-4xl mb-16 mt-16 md:text-4xl">Game Development Flash</h3>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
                    <article className="space-y-4  bg-card-color py-12 px-8 border-b-2 border-transparent">
                        <h2 className="text-3xl font-bold">Platformer</h2>
                        <h3 className="text-green-color text-2xl">It was a platformer game for a design assignature project</h3>
                        <iframe
                          width="500"
                          height="400"
                          src="https://www.youtube.com/embed/--NMlHzPV7Q"
                          frameBorder="0"
                          allowFullScreen
                          style={{
                            textAlign: "center",
                            display: "block",
                            margin: "auto",
                            minWidth: "300px",
                            minHeight: "223px",
                            width: "50%",
                            height: "50%",
                          }}
                        ></iframe>
                    </article>
                    <article className="space-y-4  bg-card-color py-12 px-8 border-b-2 border-transparent">
                       <h2 className="text-3xl font-bold">Plant vs Zombies clone</h2>
                       <h3 className="text-green-color text-2xl"> It is a tower defense game where you have to protect your garden from zombies</h3>
                       <iframe
                         width="500"
                         height="400"
                         src="https://www.youtube.com/embed/JAU6XnALj8M"
                         frameBorder="0"
                         allowFullScreen
                         style={{
                           textAlign: "center",
                           display: "block",
                           margin: "auto",
                           minWidth: "300px",
                           minHeight: "223px",
                           width: "50%",
                           height: "50%",
                         }}
                       ></iframe>
                    </article>
                    <article className="space-y-4  bg-card-color py-12 px-8 border-b-2 border-transparent">
                       <h2 className="text-3xl font-bold">Upik</h2>
                       <h3 className="text-green-color text-2xl"> A rhythm game submitted on global game jam 2016</h3>
                       <iframe
                         width="500"
                         height="400"
                         src="https://www.youtube.com/embed/WALmSGuJ-fo"
                         frameBorder="0"
                         allowFullScreen
                         style={{
                           textAlign: "center",
                           display: "block",
                           margin: "auto",
                           minWidth: "300px",
                           minHeight: "223px",
                           width: "50%",
                           height: "50%",
                         }}
                       ></iframe>
                    </article>
                </div>
                <h3 className="text-4xl mb-16 mt-16 md:text-4xl">Arduino/Raspberry Pi Projects</h3>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
                    <article className="space-y-4  bg-card-color py-12 px-8 border-b-2 border-transparent">
                       <h2 className="text-3xl font-bold">Arduino LED Matrix Control</h2>
                       <h3 className="text-green-color text-2xl">A project to control an LED Matrix with an Arduino board</h3>
                       <iframe
                         width="500"
                         height="400"
                         src="https://www.youtube.com/embed/N3bUIpiTbl8"
                         frameBorder="0"
                         allowFullScreen
                         style={{
                           textAlign: "center",
                           display: "block",
                           margin: "auto",
                           minWidth: "300px",
                           minHeight: "223px",
                           width: "50%",
                           height: "50%",
                         }}
                       ></iframe>
                    </article>
                    <article className="space-y-4  bg-card-color py-12 px-8 border-b-2 border-transparent">
                       <h2 className="text-3xl font-bold">Wifi Remote Control Car</h2>
                       <h3 className="text-green-color text-2xl">A project to control a car with a Arduino via Wifi on a web interface </h3>
                       <iframe
                         width="500"
                         height="400"
                         src="https://www.youtube.com/embed/508vKw7w2Oo"
                         frameBorder="0"
                         allowFullScreen
                         style={{
                           textAlign: "center",
                           display: "block",
                           margin: "auto",
                           minWidth: "300px",
                           minHeight: "223px",
                           width: "50%",
                           height: "50%",
                         }}
                       ></iframe>
                    </article>
                    <article className="space-y-4  bg-card-color py-12 px-8 border-b-2 border-transparent">
                       <h2 className="text-3xl font-bold">Pong</h2>
                       <h3 className="text-green-color text-2xl">A project to create a Pong game with an Arduino and a Gameduino shield</h3>
                       <iframe
                         width="500"
                         height="400"
                         src="https://www.youtube.com/embed/--Eqk_i2j-E"
                         frameBorder="0"
                         allowFullScreen
                         style={{
                           textAlign: "center",
                           display: "block",
                           margin: "auto",
                           minWidth: "300px",
                           minHeight: "223px",
                           width: "50%",
                           height: "50%",
                         }}
                       ></iframe>
                    </article>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 mt-8">
                    <article className="space-y-4  bg-card-color py-12 px-8 border-b-2 border-transparent">
                       <h2 className="text-3xl font-bold">Arcade</h2>
                       <h3 className="text-green-color text-2xl">An arcade machine using a Raspberry pi and Arduino Leonardo and Retroarch</h3>
                       <iframe
                         width="500"
                         height="400"
                         src="https://www.youtube.com/embed/VQMxp_qjvv0"
                         frameBorder="0"
                         allowFullScreen
                         style={{
                           textAlign: "center",
                           display: "block",
                           margin: "auto",
                           minWidth: "300px",
                           minHeight: "223px",
                           width: "50%",
                           height: "50%",
                         }}
                       ></iframe>
                    </article>
                    <article className="space-y-4  bg-card-color py-12 px-8 border-b-2 border-transparent">
                       <h2 className="text-3xl font-bold">AR Kart</h2>
                       <h3 className="text-green-color text-2xl">Based on Mario Kart, I created a car controled by an Arduino and a RFID module, also using Augmented reality on the RFID cards representing the power-ups</h3>
                       <iframe
                         width="500"
                         height="400"
                         src="https://www.youtube.com/embed/4crYUF0Oo_Q"
                         frameBorder="0"
                         allowFullScreen
                         style={{
                           textAlign: "center",
                           display: "block",
                           margin: "auto",
                           minWidth: "300px",
                           minHeight: "223px",
                           width: "50%",
                           height: "50%",
                         }}
                       ></iframe>
                    </article>
                </div>
             </section>
        </main>
        <footer className="py-24 text-center">
            <p className="text-xl text-gray-color">
                &copy; 2025 Julian Gomez. All rights reserved.
            </p>
        </footer>
    </div>
  );
}
/* <div>
      <BlockRenderer blocks={props.blocks} />
    </div> */
export const getStaticProps = async () => {
  const result = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }
      }
    `}
  );
  let data:any = {};
  if (result) {
    data = result.data;
  }
  return {
    props: {
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
    },
  };
};