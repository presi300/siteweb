import { AiOutlineUser, AiFillCloseCircle } from "react-icons/ai";
import Contentimg from "@/components/contentimg";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCardChecklist } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import Sidebar from "@/components/Sidebar";
import Textbox from "@/components/textbox";
import { BsPeople } from "react-icons/bs";
import Button from "@/components/Button";
import Modal from "@/components/modal";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div
      id="main"
      className="scrollbar-hide flex h-auto w-screen flex-row flex-wrap bg-gradient-to-b from-black to-slate-900"
    >
      {/*Sidebar*/}
      <Sidebar id="hs-overlay-example">
        <div className=" z-[59] flex w-full flex-wrap items-center gap-4">
          <Button variant="ghost" data-hs-overlay="#modal1">
            <BsPeople className="mr-4"></BsPeople> Организатори
          </Button>
          <Button variant="ghost" data-hs-overlay="#modal2">
            <BsCardChecklist className="mr-4"></BsCardChecklist> Програма
          </Button>
          <Button variant="ghost" data-hs-overlay="#modal3">
            <AiOutlineUser className="mr-4"></AiOutlineUser> Участници
          </Button>
        </div>
        <div className="relative">
          <p className="fixed bottom-0 z-[60] mb-5 mr-3 text-center text-sm font-light text-white">
            Проект по гражданско образование Преслав Вълчев/Виктор Тодоров 2023г.
          </p>
        </div>
      </Sidebar>
      {/*Navbar*/}
      <div className="fixed z-[58] flex h-12 w-full items-center justify-between bg-black ">
        <div className="flex w-1/3  justify-start  text-white ">
          <div className="flex hover:bg-slate-900">
            <button
              data-hs-overlay="#hs-overlay-example"
              className="h-full w-full cursor-pointer p-4"
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
        <div className="flex w-1/3 justify-center text-white">
          <p className="text-xl">ПГЕА</p>
        </div>
        <div className="flex w-1/3 items-center justify-end text-white">
          <button data-hs-overlay="#modal2" className=" p-4 hover:bg-slate-900">
            <BsCardChecklist />
          </button>
          <button data-hs-overlay="#modal3" className="p-4 hover:bg-slate-900">
            <AiOutlineUser />
          </button>
          <button data-hs-overlay="#modal1" className="p-4 hover:bg-slate-900">
            <BsPeople />
          </button>
        </div>
      </div>
      {/*Title*/}

      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <h1 className="title text-center text-3xl text-white">
          Професионална гимназия по електротехника и автоматика
        </h1>
        <h2 className="title mt-2 text-xl text-white">Клуб по компютърна грамотност</h2>
      </div>
      {/*Content*/}
      <div className="gradient-to-b m-5 flex w-screen justify-center">
        <div className="flex w-full flex-col flex-wrap">
          <Fade>
            <Contentimg text="Подобри компютърните си умения!">
              <img className="rounded-sm" src="images/matrica.png" alt="image description" />
            </Contentimg>
            <div className="mb-20 transition-all md:mb-40">
              <Textbox
                text="Научи етика за използване на компютър, сърфиране на интернета и други елементарни
                  концепции, нужни за умното използване на компютърни системи"
              ></Textbox>
            </div>
          </Fade>
          <Fade>
            <Contentimg text="Изпробвай нови технологии!">
              <img
                className="rounded-sm"
                src="https://cdn.vox-cdn.com/thumbor/p7Hg3buvN5jdJ78-0qbSvkILx28=/0x195:3840x2205/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22661965/img19.jpg"
                alt="image description"
              />
            </Contentimg>
            <div className="mb-20 transition-all md:mb-40">
              <Textbox
                text="Виж най-новите иновации в ИТ сектора и се научи на тяхното правнилно използване с
                  цел подобряване и модернизиране на работата и учебният процес"
              ></Textbox>{" "}
            </div>
          </Fade>
          <Fade>
            <Contentimg text="Научи се на добри практики за кибер сигурност!">
              <img
                className="rounded-sm"
                src="https://wallpapercave.com/wp/wp2691568.jpg"
                alt="image description"
              />
            </Contentimg>
            <div className="mb-20 transition-all md:mb-40">
              <Textbox
                text="Виж най-новите иновации в ИТ сектора и се научи на тяхното правнилно използване с
                  цел подобряване и модернизиране на работата и учебният процес"
              ></Textbox>
            </div>
          </Fade>
          <div className="mb-10 flex flex-col items-center justify-center text-3xl text-white">
            <p className="mb-5 mt-7">Какво чакаш?</p>
            <a href="#" className="">
              <span>
                <p className=" m-2 bg-blue-900 py-3 px-24 text-center text-2xl transition-all hover:bg-blue-800">
                  Запиши се!
                </p>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/*Footer*/}
      <div className="mb-8 flex w-full justify-center border-t border-slate-700 pt-10 align-middle ">
        <p className="font-li text-xs text-white">
          Технологии използвани:
          <a className="hover:text-blue-400" href="https://nextjs.org/">
            NextJS
          </a>
          ,{" "}
          <a className="hover:text-blue-400" href="https://www.typescriptlang.org/">
            Typescript
          </a>
          ,{" "}
          <a className="hover:text-blue-400" href="https://tailwindcss.com">
            TailwindCSS
          </a>
        </p>
      </div>

      {/*Modals*/}
      <Modal id="modal1" hashid="#modal1" title="Организатори">
        <div className="flex flex-col">
          <p className="m-2 bg-slate-800 p-3 text-center ">
            Преслав Вълчев (Professional dumbass | 11в клас){" "}
          </p>
          <p className="m-2 bg-slate-800 p-3 text-center">
            Виктор Тодоров (Professional neckbeard | 11в клас)
          </p>
        </div>
      </Modal>

      <Modal id="modal2" hashid="#modal2" title="Програма">
        <div className="flex flex-col">
          <div className="m-2 bg-slate-800 p-3 text-center">
            Първи два месеца: <p className="mt-3 font-bold">Основни концепции за компютрите</p>
          </div>
          <div className="m-2 bg-slate-800 p-3 text-center">
            След втория месец до края на първия срок:
            <p className="mt-3 font-bold">
              Разглеждане на нови технологии изучавана на основни концепции за тях
            </p>
          </div>
          <div className="m-2 bg-slate-800 p-3 text-center">
            От началото на втория срок до началото на производствена практика:
            <p className="mt-3 font-bold">
              Практика по използване на научените технологии в производствена среда
            </p>
          </div>
          <div className="mt-5 text-center text-slate-300">
            За повече информация се допитайте до организаторите!
          </div>
        </div>
      </Modal>

      <Modal id="modal3" hashid="#modal3" title="Участници">
        <p className="m-2">Организатори/ръководители:</p>
        <p className="m-2 bg-slate-800 py-3 px-24 text-center">Преслав Вълчев: 11в клас</p>
        <p className="m-2 bg-slate-800 py-3 px-24 text-center">Виктор Тодоров: 11в клас</p>
        <p className="m-2">Учители:</p>
        <p className="m-2 bg-slate-800 px-24 py-3 text-center">Димитрина Ангелова</p>
        <p className="m-2 bg-slate-800 py-3 px-24 text-center">Маргарита Тодорова</p>
        <p className="m-2 bg-slate-800 py-3 px-24 text-center">Валентина Олейникова</p>
        <p className="m-2">Участници в клуба:</p>
        <a href="#">
          <span>
            <p className="m-2 bg-slate-700 py-3 px-24 text-center transition-all hover:bg-slate-800">
              Списък с участници
            </p>
          </span>
        </a>
        <a href="#">
          <span>
            <p className="m-2 bg-blue-900 py-3 px-24 text-center transition-all hover:bg-blue-800">
              Запиши се!
            </p>
          </span>
        </a>
      </Modal>
    </div>
  );
};

export default Home;
