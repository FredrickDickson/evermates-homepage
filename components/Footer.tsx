import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Explore</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Practice Tests</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Quests</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Challenges</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Community</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Forums</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Discord</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Events</a></li>
            </ul>
          </div>
           <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
           <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-base text-gray-500">&copy; 2023 Evermates, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;