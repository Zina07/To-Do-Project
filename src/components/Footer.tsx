export default function Footer() {
  const footerLinks = [
    { label: "Accueil", href: "../page.tsx" },
    { label: "Politique de confidentialité", href: "/politique" },
    { label: "Mentions légales", href: "/mentions-legales" },
  ];
  
  return (
    <footer className="bg-white lg shadow ">
      <div className="bg-gradient-to-r from-gray-500 ...">
        <div className="divide-y-8 border-top-width: 8px border-bottom-width: 0px;">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between"></div>
            <div className="">
              <h6> Retrouver nos pages</h6>
              {
                // for todo of todos {
                //   return
                // }
                footerLinks.map((footerLink) => (
                  <div
                    className="mb-6 bg-blue-greeb-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
             focus:border-blue-500 block w-m p-2.5 cursor-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 
             dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <div className="flex items-center">
                      <a href={footerLink.href}>{footerLink.label} </a>
                    </div>
                  </div>
                ))
              }
            </div>

            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024 Zina
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
