"use client";

import React, { useEffect, useState, CSSProperties } from "react";
import { projectsData } from "@/lib/data";
import { FaGithubSquare, FaPlayCircle } from "react-icons/fa";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImageDetail from "./image-detail";

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "100%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "100%",
      }}
      onClick={onClick}
    />
  );
}

type ProjectProps = (typeof projectsData)[number];

interface ProjectModalProps {
  isOpen: boolean;
  project: ProjectProps | null;
  handleClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  project,
  handleClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!isOpen || !project) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const handleImageClick = (image: string | null) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleClose}
    >
      <div
        className="
          flex flex-col 
          px-4 sm:px-6 lg:px-8 
          gap-8 
          items-center 
          w-full 
          max-w-sm sm:max-w-5xl 
          max-h-[85vh] 
          bg-white 
          dark:text-white 
          dark:bg-zinc-900 
          p-6 
          rounded-lg 
          relative 
          overflow-y-auto 
          overflow-x-hidden 
          scrollbar-hide
          sm:w-11/12 lg:w-3/4
          mx-auto
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* 프로젝트 제목 및 링크 */}
        <div className="w-full flex flex-col items-center justify-center gap-8">
          <h3 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
            {project.title}
          </h3>
          <div className="flex gap-8">
            <a
              className="bg-white text-3xl text-gray-700 rounded-full dark:bg-white/10 dark:text-white/60 p-2 hover:bg-gray-200 transition-colors"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare />
            </a>
            {project.demo && (
              <a
                className="bg-white text-3xl text-gray-700 rounded-full dark:bg-white/10 dark:text-white/60 p-2 hover:bg-gray-200 transition-colors"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPlayCircle />
              </a>
            )}
          </div>
        </div>

        {/* 프로젝트 소개 */}
        <div className="w-full flex flex-col gap-8 justify-center items-start">
          <h3 className="font-bold text-2xl sm:text-3xl border-b pb-4 w-full border-zinc-400">
            ⭐️ 프로젝트 소개
          </h3>
          <h3 className="text-xl">진행 기간: {project.period}</h3>
          <p className="text-lg dark:text-white mt-2">{project.description}</p>
        </div>

        {/* 프로젝트 기능 소개 */}
        {project.features.length > 0 && (
          <div>
            <h3 className="font-bold text-2xl sm:text-3xl border-b pb-4 w-full mb-10 border-zinc-400">
              ⚙️ 프로젝트 기능
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-lg">{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 사용한 기술 스택 */}
        <div className="w-full flex flex-col gap-6">
          <h3 className="font-bold text-2xl sm:text-3xl border-b pb-4 w-full border-zinc-400">
            ✏️ 기술 스택
          </h3>
          <ul className="flex flex-col gap-8">
            {project.tags.map((tag, index) => (
              <li
                key={index}
                className="bg-gray-100 shadow-lg dark:bg-gray-600 px-4 py-2 rounded-md text-base dark:text-white/80"
              >
                <span className="text-xl font-semibold">{tag.skill}</span>
                <p className="text-lg text-gray-600 dark:text-white/70 mt-1">
                  {tag.reason}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* 프로젝트 참여 인원 */}
        <div className="w-full flex flex-col gap-8 justify-center items-start">
          <h3 className="font-bold text-2xl sm:text-3xl border-b pb-4 w-full border-zinc-400">
            👬 프로젝트 참여 인원
          </h3>
          {project.people.backend ? (
            <h3 className="text-xl">
              프론트엔드 {project.people.frontend}명, 백엔드{" "}
              {project.people.backend}명
            </h3>
          ) : (
            <h3 className="text-xl">프론트엔드 {project.people.frontend}명</h3>
          )}
        </div>

        {/* 기여 부분 */}
        {project.contributes.length > 0 && (
          <div className="w-full flex flex-col gap-8 justify-center items-start">
            <h3 className="font-bold text-2xl sm:text-3xl border-b pb-4 w-full border-zinc-400">
              🙋‍♂️ 기여 부분
            </h3>
            <ul className="list-none space-y-6">
              {project.contributes.map((contribute, index) => (
                <li
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {contribute.title}
                  </h3>
                  <p className="text-lg">{contribute.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Trouble Shooting */}
        {project.troubleShooting.length > 0 && (
          <div className="w-full flex flex-col">
            <h3 className="font-bold text-2xl sm:text-3xl border-b pb-4 w-full mb-10 border-zinc-400">
              🛠️ TroubleShooting
            </h3>
            <ul className="list-none space-y-6">
              {project.troubleShooting.map((trouble, index) => (
                <li
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
                      {trouble.title}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-400 mt-2">
                      {trouble.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-inner">
                      <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                        ✅ Solution
                      </p>
                      <p className="text-lg text-gray-800 dark:text-gray-300">
                        {trouble.solution}
                      </p>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-inner">
                      <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                        👌 Learned
                      </p>
                      <p className="text-lg text-gray-800 dark:text-gray-300">
                        {trouble.learned}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 프로젝트 이미지 */}
        {project.images && project.images.length > 0 && (
          <div className="w-full flex flex-col gap-8 justify-center items-start">
            <h3 className="font-bold text-2xl sm:text-3xl border-b pb-4 w-full border-zinc-400">
              프로젝트 이미지
            </h3>
            <div className="w-full">
              <Slider {...settings}>
                {project.images.map((image, index) => (
                  <div key={index} className="p-4 rounded-2xl">
                    <Image
                      src={image}
                      width={500}
                      height={500}
                      alt="project"
                      className="w-full h-auto rounded-xl p-2 border-2 cursor-pointer"
                      style={{
                        maxHeight: "500px",
                        objectFit: "contain",
                      }}
                      onClick={() => handleImageClick(image)}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </div>
      {isImageModalOpen && selectedImage && (
        <ImageDetail
          image={selectedImage}
          handleClose={() => setIsImageModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProjectModal;
