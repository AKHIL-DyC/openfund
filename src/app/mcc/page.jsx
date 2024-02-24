import Link from "next/link"

export default function Component() {
  return (
    <div className="bg-gray-50/90 border-t border-b border-gray-200 border-gray-200 m-[50px]">
      <div className="container px-4 py-6 md:py-12 m-[30px]">
        <div className="grid gap-6 md:gap-4 lg:grid-cols-3 lg:gap-10 xl:gap-16">
          <div className="space-y-4 lg:col-span-2 lg:space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Manjeri Cancer Centre</h1>
              <p className="text-gray-500 dark:text-gray-400">Helping cancer patients live with hope</p>
            </div>
            <div className="space-y-4 md:space-y-0 md:flex md:items-center md:justify-around md:gap-4 lg:gap-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold">Total amount raised</p>
                <p className="text-2xl font-bold">$250,000</p>
              </div>
              <div className="space-y-2 bg-gray-800 w-[300px] p-4 rouned-sm ml-">
                <p className="text-sm font-semibold text-gray-300">Campaign progress</p>
                <div className="flex w-full h-2 rounded-full bg-gray-700 dark:bg-gray-200">
                  <div className="h-full rounded-full bg-gray-900 w-3/4 dark:bg-[#60941a]" />
                </div>
                <p className="text-xs text-gray-100">75% of $350,000 goal</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-end">
                          <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href={'https://rzp.io/l/yzoWbaZY'}
            >
              Donate
            </Link>
            <Link
              className="inline-flex text-white  h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
             href={'https://open-fund-dashboard.vercel.app/'}
            >
              View Transactions
            </Link>
          </div>
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Who We Help</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Our center provides support to cancer patients of all ages.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">How We Help</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Through advanced treatments and compassionate care, we strive to improve the lives of those fighting
                  cancer.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-gray-500 dark:text-gray-400">The Manjeri Cancer Care Foundation, situated in Manjeri, is dedicated to providing comprehensive support and care to cancer patients in the region. Through a network of healthcare professionals and volunteers, the foundation offers medical assistance, emotional support, and awareness programs aimed at fostering a compassionate and empowering environment for individuals battling cancer in Manjeri.

                </p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-500 dark:text-gray-400">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

