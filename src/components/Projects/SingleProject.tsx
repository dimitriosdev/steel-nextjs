"use client";

import Link from "next/link";
import { Project } from "@/types/project";
import Image from "next/image";
import { useState } from "react";

const SingleProject = ({ project }: { project: Project }) => {
  const { id, title, description, images } = project;
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (idx: number) => {
    setActiveIndex(idx);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);
  const prevImage = () =>
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImage = () =>
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300">
      <Link
        href={`/projects/${id}`}
        className="relative block aspect-37/22 w-full cursor-pointer"
      >
        {images && images.length > 0 && (
          <Image src={images[0]} alt={title} fill className="object-cover" />
        )}
      </Link>
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3 className="mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white">
          <Link href={`/projects/${id}`}>{title}</Link>
        </h3>
        <p className="border-body-color/10 text-body-color mb-6 border-b pb-6 text-base font-medium dark:border-white/10">
          {description}
        </p>
        {images && images.length > 0 && (
          <div className="flex gap-2 overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded border focus:outline-none"
                onClick={() => openModal(idx)}
                type="button"
                aria-label={`Open image ${idx + 1}`}
              >
                <Image
                  src={img}
                  alt={title + " " + (idx + 1)}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
      {showModal && (
        <>
          <style>{`header.header { visibility: hidden !important; }`}</style>
          <div className="bg-opacity-80 fixed inset-0 z-50 flex items-center justify-center bg-black">
            <button
              className="bg-opacity-60 hover:bg-opacity-90 fixed top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black text-3xl text-white focus:outline-none"
              onClick={closeModal}
              aria-label="Close modal"
              style={{ zIndex: 60 }}
            >
              &times;
            </button>
            <button
              className="bg-opacity-60 absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black text-3xl text-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-40"
              style={{ zIndex: 60 }}
              onClick={prevImage}
              aria-label="Previous image"
              disabled={images.length <= 1}
            >
              &#8592;
            </button>
            <div
              className="relative flex h-[60vw] max-h-[70vh] w-[90vw] max-w-2xl flex-col items-center justify-center rounded bg-white shadow-lg"
              style={{ zIndex: 55 }}
            >
              <Image
                src={images[activeIndex]}
                alt={title + " " + (activeIndex + 1)}
                fill
                className="rounded object-contain"
              />
              <div className="bg-opacity-60 absolute bottom-4 left-1/2 -translate-x-1/2 rounded bg-black px-3 py-1 text-sm text-white">
                {activeIndex + 1} / {images.length}
              </div>
            </div>
            <button
              className="bg-opacity-60 absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black text-3xl text-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-40"
              style={{ zIndex: 60 }}
              onClick={nextImage}
              aria-label="Next image"
              disabled={images.length <= 1}
            >
              &#8594;
            </button>
            <button
              className="fixed inset-0 z-40 h-full w-full cursor-pointer"
              onClick={closeModal}
              aria-label="Close modal background"
              tabIndex={-1}
              style={{ background: "transparent" }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProject;
