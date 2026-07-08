let data = {
  company: "TechCorp",
  establishment_year: 2020,
  is_active: true,
  ceo: null,
  office_locations: ["Hyderabad", "San Francisco", "Berlin"],
  departments: {
    engineering: {
      head: "Sarah Jenkins",
      team_size: 42,
      remote_friendly: true,
    },
    marketing: {
      head: "David Chen",
      team_size: 15,
      remote_friendly: false,
    },
  },
};
console.log(data.departments.engineering.team_size);
console.log(data.office_locations[1]);