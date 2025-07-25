export default function Footer() {
  return (
    <footer className=" py-6 border-t border-gray-900 dark:border-gray-100 justify-between px-6 md:px-10">
      <div className="flex flex-row mx-auto items-center justify-between text-center gap-10">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Murilo Zangari. All rights reserved.
        </p>
        <p className="text-sm md:text-base">
          <a
            href="mailto:murilo.zangari@gmail.com"
            className="font-medium hover:underline transition"
          >
            murilo.zangari@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
