import { XMarkIcon } from "@heroicons/react/24/outline";

const RateLimitedUI = () => {
  return (
    <div className="max-w-6x1 mx-auto p-4">
      <div className="bg-primary/10 border border-primary/50 rounded-lg shadow-md">
        <div className="flex flex=col ms:flex-row items-center p-6">
          <div className="flex-shrink-0 bg-primary/20 p-4 rounded-b-full mb-4 md:mb-0 md:mr-6">
            <XMarkIcon className="size-10 text-primary" />
          </div>
          <div className="flex-1 text-center md: text-left">
            <h3 className="text-xl font-bold mb-2">Rate Limit Reached</h3>
            <p className="text-base-content mb-1">
              You have reached the rate limit for this action. Please try again
              later.
            </p>
            <p className="text-sm text-base-content/70">
              This is a simple rate limit message. You can customize it as
              needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
