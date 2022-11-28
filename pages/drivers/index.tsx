import Link from "next/link";

import { driverNameToSlug } from "../../utils/slug";

import driverNames from '../../data/driverNames.json'

interface DriversPageProps {
  drivers: {
    slug: string;
    name: string;
  }[];
}

export default function DriversPage({ drivers }: DriversPageProps) {
  return (
    <>
      <h1>Drivers</h1>
      {drivers.map((driver) => (
        <Link key={driver.slug} href={`/drivers/${driver.slug}`}>
          <div>{driver.name}</div>
        </Link>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const drivers = driverNames.map((driverName) => {
    return {
      slug: driverNameToSlug(driverName),
      name: driverName,
    };
  });
  return {
    props: {
      drivers: drivers,
    },
  };
}
