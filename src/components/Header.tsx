export default function Header() {
  return (
    <header>
      <nav
        className="justify-center px-4 py-3 text-gray-700 border border-gray-200 sm:flex sm:px-5 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center mb-3 space-x-1 md:space-x-2 rtl:space-x-reverse sm:mb-0">
          <li>
            <div className="flex items-center">
              <a
                href="#"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-green-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                <h1 className="">To do List Project </h1>
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </header>
  );
}
