const stats = [
    { id: 1, name: 'Year Founded', value: '2010' },
    { id: 2, name: 'Startups Supported', value: '200' },
    { id: 3, name: 'Startups that raised venture rounds', value: 8 },
  ]
  
  export default function Stats() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Spinnaker&display=swap"
        />
        <div className="py-8 sm:py-12 relative">
          <div className="absolute inset-0 bg-blue-400 opacity-10 filter blur-xl rounded-full"></div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-blue-500" style={{ fontFamily: "Spinnaker, sans-serif" }}>
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl" style={{ fontFamily: "Spinnaker, sans-serif" }}>
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
  }