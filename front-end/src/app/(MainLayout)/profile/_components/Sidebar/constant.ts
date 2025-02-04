 

export const userLinks = [
  {
    label: "My Appointment",
    
    subLinks: [
      { href: "/profile/appointments/upcoming", label: "Upcoming Appointments",   },
      { href: "/profile/appointments/past", label: "Previous Appointments",   },
    ],
  },
  { href: "/profile/transaction", label: "Transaction",   },
  { href: "/profile/points", label: "Points",   },
  { href: "/profile/profiles", label: "Profile",  },
  { href: "/", label: "Logout", },
];

export const adminLinks = [{ href: "/admin", label: "Admin",  }];
