import * as React from 'react';
import Select, { ValueType } from 'react-select';

interface StateOption {
  value: string;
  label: string;
}

const states: Array<StateOption> = [
  { value: 'http://www.adph.org/', label: 'Alabama' },
  { value: 'http://dhss.alaska.gov/Pages/default.aspx', label: 'Alaska' },
  { value: 'https://www.americansamoa.gov/department-of-public-health', label: 'American Samoa' },
  { value: 'http://www.azdhs.gov/', label: 'Arizona' },
  { value: 'http://www.healthy.arkansas.gov/', label: 'Arkansas' },
  { value: 'http://www.cdph.ca.gov/', label: 'California' },
  { value: 'http://www.cdphe.state.co.us/', label: 'Colorado' },
  { value: 'http://www.ct.gov/dph/', label: 'Connecticut' },
  { value: 'https://www.dhss.delaware.gov/dhss/', label: 'Delaware' },
  { value: 'http://doh.dc.gov/', label: 'District Of Columbia' },
  { value: 'http://www.floridahealth.gov/', label: 'Florida' },
  { value: 'http://www.dph.georgia.gov/', label: 'Georgia' },
  { value: 'http://www.dphss.guam.gov/', label: 'Guam' },
  { value: 'http://www.health.hawaii.gov/', label: 'Hawaii' },
  { value: 'http://www.healthandwelfare.idaho.gov/', label: 'Idaho' },
  { value: 'http://www.dph.illinois.gov/', label: 'Illinois' },
  { value: 'http://www.state.in.us/isdh/', label: 'Indiana' },
  { value: 'https://idph.iowa.gov/', label: 'Iowa' },
  { value: 'http://www.kdheks.gov/', label: 'Kansas' },
  { value: 'https://chfs.ky.gov/Pages/index.aspx', label: 'Kentucky' },
  { value: 'http://www.dhh.louisiana.gov/', label: 'Louisiana' },
  { value: 'http://www.maine.gov/dhhs/', label: 'Maine' },
  { value: 'https://health.maryland.gov/pages/home.aspx', label: 'Maryland' },
  { value: 'http://www.mass.gov/eohhs/gov/departments/dph/', label: 'Massachusetts' },
  { value: 'http://www.michigan.gov/mdch', label: 'Michigan' },
  { value: 'http://www.health.state.mn.us/', label: 'Minnesota' },
  { value: 'http://www.msdh.state.ms.us/', label: 'Mississippi' },
  { value: 'http://health.mo.gov/index.php', label: 'Missouri' },
  { value: 'http://dphhs.mt.gov/', label: 'Montana' },
  { value: 'http://dhhs.ne.gov/Pages/default.aspx', label: 'Nebraska' },
  { value: 'http://dhhs.nv.gov/', label: 'Nevada' },
  { value: 'http://www.dhhs.state.nh.us/', label: 'New Hampshire' },
  { value: 'http://www.nj.gov/health/', label: 'New Jersey' },
  { value: 'http://nmhealth.org/', label: 'New Mexico' },
  { value: 'https://www.health.ny.gov/', label: 'New York' },
  { value: 'http://www.ncdhhs.gov/', label: 'North Carolina' },
  { value: 'https://www.ndhealth.gov/', label: 'North Dakota' },
  { value: 'http://chcc.gov.mp/', label: 'Northern Mariana Islands' },
  { value: 'https://www.odh.ohio.gov/', label: 'Ohio' },
  { value: 'http://www.ok.gov/health/', label: 'Oklahoma' },
  { value: 'https://public.health.oregon.gov/Pages/Home.aspx', label: 'Oregon' },
  { value: 'http://www.health.pa.gov/Pages/default.aspx#.VSPjfPnF-aU', label: 'Pennsylvania' },
  { value: 'http://www.salud.gov.pr/Pages/Home.aspx', label: 'Puerto Rico' },
  { value: 'http://www.palauhealth.org/', label: 'Republic Of Palau' },
  { value: 'http://www.rmiembassyus.org/index.php/about/marshall-islands/government', label: 'Republic Of The Marshall Islands' },
  { value: 'http://www.health.ri.gov/', label: 'Rhode Island' },
  { value: 'http://www.scdhec.gov/', label: 'South Carolina' },
  { value: 'https://doh.sd.gov/', label: 'South Dakota' },
  { value: 'https://www.tn.gov/health.html', label: 'Tennessee' },
  { value: 'https://www.dshs.state.tx.us/', label: 'Texas' },
  { value: 'https://doh.vi.gov/', label: 'U. S. Virgin Islands' },
  { value: 'http://health.utah.gov/', label: 'Utah' },
  { value: 'http://healthvermont.gov/', label: 'Vermont' },
  { value: 'http://www.vdh.state.va.us/', label: 'Virginia' },
  { value: 'http://www.doh.wa.gov/', label: 'Washington' },
  { value: 'http://www.dhhr.wv.gov/Pages/default.aspx', label: 'West Virginia' },
  { value: 'https://www.dhs.wisconsin.gov/', label: 'Wisconsin' },
  { value: 'https://health.wyo.gov/', label: 'Wyoming' }
];

type OptionType = { label: string; value: string };

const StateSelect: React.FC = () => {
  return (
    <Select
      options={states}
      isSearchable
      placeholder="Please select your state..."
      onChange={(selectedOption: ValueType<OptionType>) => {
        const { value } = selectedOption as OptionType;
        const win = window.open(value, '_blank');
        if (win != null) {
          win.focus();
        }
      }}
    />
  );
};

export default StateSelect;
