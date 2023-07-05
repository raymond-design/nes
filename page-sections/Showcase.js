import { useState } from 'react';
import { motion } from 'framer-motion';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import Head from "next/head";

const StartupShowcase = ({ startups }) => {
  const [filter, setFilter] = useState('');

  const filteredStartups = filter
    ? startups.filter((startup) => startup.industry === filter)
    : startups;

  const industries = Array.from(
    new Set(startups.map((startup) => startup.industry))
  );

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Spinnaker&display=swap"
        />
      </Head>

    <div className="p-4 px-6 w-5/6 mx-auto">
      <div className="flex justify-between items-center mb-4">
        <FilterList />
      </div>
      <div className="mb-8">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => setFilter(industry)}
            className={`mr-3 px-3 py-2 rounded-full text-sm font-medium ${
              filter === industry
                ? `bg-indigo-500 text-white`
                : 'bg-gray-900 text-gray-200'
            }`}
            style={{ fontFamily: "Spinnaker, sans-serif" }}
          >
            {industry}
          </button>
        ))}
        <button
          onClick={() => setFilter('')}
          className={`px-3 py-2 rounded-full text-sm font-medium ml-2 ${
            filter === '' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          style={{ fontFamily: "Spinnaker, sans-serif" }}
        >
          All
        </button>
      </div>
      <Grid container spacing={4}>
        {filteredStartups.map((startup) => (
          <Grid key={startup.name} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className={`border-t-4 ${
                  startup.industry === 'Software'
                    ? 'border-pink-400'
                    : startup.industry === 'Arts'
                    ? 'border-purple-400'
                    : startup.industry === 'Security'
                    ? 'border-indigo-400'
                    : startup.industry === 'Consumer'
                    ? 'border-blue-400'
                    : 'border-gray-200'
                }`}
                style={{ fontFamily: "Spinnaker, sans-serif" }}
              >
                <div className={`font-light px-2 py-0.5 bg-gray-900 ${
                  startup.industry === 'Software'
                    ? 'text-pink-400'
                    : startup.industry === 'Arts'
                    ? 'text-purple-400'
                    : startup.industry === 'Security'
                    ? 'text-indigo-400'
                    : startup.industry === 'Consumer'
                    ? 'text-blue-400'
                    : 'text-gray-200'
                }`}>{startup.industry}</div>
                <CardContent className='bg-gray-900'>
                  <div className="flex items-center justify-center mb-4">
                    <img src={startup.logo} alt={startup.name} className="h-16" />
                  </div>
                  <Typography className="text-gray-200" variant="h5" style={{ fontFamily: "Spinnaker, sans-serif" }}>{startup.name}</Typography>
                  <Typography className="text-gray-200" variant="subtitle1" style={{ fontFamily: "Spinnaker, sans-serif" }}>{startup.yearFounded}</Typography>
                  <Typography className="text-gray-200" variant="body2" style={{ fontFamily: "Spinnaker, sans-serif" }}>{startup.description}</Typography>
                  <Typography className="text-gray-200" variant="caption" style={{ fontFamily: "Spinnaker, sans-serif" }}>
                    Relation: {startup.relation}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      </div>
    </div>
  );
};

export default StartupShowcase;
