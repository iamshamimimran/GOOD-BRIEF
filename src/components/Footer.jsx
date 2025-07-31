const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-2">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <p className=" text-xs italic mb-2">
            Design tips, resources, curated practice briefs.
          </p>

          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <span>
              Made by <strong>Shamim Imran</strong>
            </span>

            <a href="#" className="hover:text-gray-700">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
