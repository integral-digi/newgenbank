import { formattedCurr } from "../dashboard/components/Balances";

interface LeaderboardProps {
  numberOfEntries: number;
}

interface LeaderboardEntry {
  username: string;
  amount: number;
  country: string;
}

export const generateRandomUsername = (): string => {
  return Math.random().toString(36).substring(7);
};

export const generateRandomAmount = (): number => {
  return Math.floor(Math.random() * 1000);
};

export const generateRandomCountry = (): string => {
    const countries: string[] = [
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Brazil',
        'Brunei',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cabo Verde',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Colombia',
        'Comoros',
        'Congo',
        'Costa Rica',
        'Croatia',
        'Cuba',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Eswatini',
        'Ethiopia',
        'Fiji',
        'Finland',
        'France',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Greece',
        'Grenada',
        'Guatemala',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Honduras',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        'Kuwait',
        'Kyrgyzstan',
        'Laos',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Mauritania',
        'Mauritius',
        'Mexico',
        'Micronesia',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Morocco',
        'Mozambique',
        'Myanmar',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'North Macedonia',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Palestine',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Poland',
        'Portugal',
        'Qatar',
        'Romania',
        'Russia',
        'Rwanda',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Vincent and the Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'South Korea',
        'South Sudan',
        'Spain',
        'Sri Lanka',
        'Sudan',
        'Suriname',
        'Sweden',
        'Switzerland',
        'Syria',
        'Taiwan',
        'Tajikistan',
        'Tanzania',
        'Thailand',
        'Timor-Leste',
        'Togo',
        'Tonga',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'United States',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Vatican City',
        'Venezuela',
        'Vietnam',
        'Yemen',
        'Zambia',
        'Zimbabwe'
      ];
      
  return countries[Math.floor(Math.random() * countries.length)];
};

export const generateRandomLeaderboardEntries = (numberOfEntries: number): LeaderboardEntry[] => {
  const entries: LeaderboardEntry[] = [];
  for (let i = 0; i < numberOfEntries; i++) {
    entries.push({
      username: generateRandomUsername(),
      amount: generateRandomAmount(),
      country: generateRandomCountry(),
    });
  }
  return entries;
};

const Leaderboard: React.FC<LeaderboardProps> = ({ numberOfEntries }) => {
  const leaderboardData = generateRandomLeaderboardEntries(numberOfEntries);

  return (
    <div className="px-8">
        <section className="w-full">
          <section className="font-medium shadow-sm rounded-md flex items-center justify-between px-8">
            <section className="w-[33%] py-8 text-white">Username</section>
            <section className="w-[33%] py-8 text-white">Amount</section>
            <section className="w-[33%] py-8 text-white">Country</section>
          </section>
        </section>
        <section className="space-y-3">
          {leaderboardData.map((entry, index) => (
            <section key={index} className="bg-slate-950 font-medium shadow-sm rounded-md px-8 flex items-center justify-between">
              <section className="w-[33%] py-8 text-white">{entry.username}</section>
              <section className="w-[33%] py-8 text-white">${entry.amount}</section>
              <section className="w-[33%] py-8 text-white">{entry.country}</section>
            </section>
          ))}
        </section>
    </div>
  );
};

export default Leaderboard;
