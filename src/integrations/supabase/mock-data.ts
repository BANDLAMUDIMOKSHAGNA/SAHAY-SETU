// Mock data and PostgREST in-memory adapter for offline / development / AI Studio preview
// Provides realistic sample data when Supabase credentials are not yet configured.

export interface MockProfile {
  id: string;
  user_id: string | null;
  account_type: "worker" | "employer";
  full_name: string;
  headline: string | null;
  trade: string | null;
  city: string | null;
  bio: string | null;
  experience_years: number | null;
  daily_rate: number | null;
  phone: string | null;
  skills: string[];
  available: boolean;
  verified: boolean;
  company_name: string | null;
  is_sample: boolean;
  created_at: string;
  updated_at: string;
}

export interface MockJob {
  id: string;
  posted_by: string;
  title: string;
  company: string | null;
  trade: string;
  city: string;
  description: string;
  pay_min: number | null;
  pay_max: number | null;
  pay_unit: string;
  job_type: string;
  experience_min: number | null;
  skills: string[];
  status: string;
  created_at: string;
}

export interface MockToolListing {
  id: string;
  owner_id: string;
  title: string;
  category: string;
  description: string;
  city: string;
  listing_type: string;
  price: number;
  price_unit: string;
  deposit: number | null;
  condition: string;
  available: boolean;
  created_at: string;
}

export interface MockCommunity {
  id: string;
  slug: string;
  name: string;
  description: string;
  trade: string | null;
  created_at: string;
}

export interface MockPost {
  id: string;
  community_id: string;
  author_id: string;
  title: string;
  body: string;
  created_at: string;
}

export interface MockComment {
  id: string;
  post_id: string;
  author_id: string;
  body: string;
  created_at: string;
}

const initialProfiles: MockProfile[] = [
  {
    id: "00000000-0000-0000-0000-000000000001",
    user_id: null,
    account_type: "worker",
    full_name: "Ravi Teja Kondapalli",
    headline: "Licensed electrician — residential & shop wiring",
    trade: "Electrician",
    city: "Vijayawada",
    bio: "Fourteen years wiring homes and small commercial units around Benz Circle and Patamata. Comfortable with three-phase panels and inverter installs.",
    experience_years: 14,
    daily_rate: 1200,
    phone: "9876543210",
    skills: ["House wiring", "Panel boards", "Inverter install", "Earthing"],
    available: true,
    verified: true,
    company_name: null,
    is_sample: true,
    created_at: "2025-01-10T08:00:00Z",
    updated_at: "2025-01-10T08:00:00Z",
  },
  {
    id: "00000000-0000-0000-0000-000000000002",
    user_id: null,
    account_type: "worker",
    full_name: "Lakshmi Prasanna Gadde",
    headline: "Plumber — bathroom fitting & leak repair",
    trade: "Plumber",
    city: "Guntur",
    bio: "Handle CPVC/UPVC lines, concealed fittings and overhead tank connections. Available weekends.",
    experience_years: 8,
    daily_rate: 900,
    phone: "9876543211",
    skills: ["CPVC", "Concealed fitting", "Leak detection"],
    available: true,
    verified: true,
    company_name: null,
    is_sample: true,
    created_at: "2025-01-11T09:00:00Z",
    updated_at: "2025-01-11T09:00:00Z",
  },
  {
    id: "00000000-0000-0000-0000-000000000003",
    user_id: null,
    account_type: "worker",
    full_name: "Mohammed Imran",
    headline: "MIG/TIG welder, fabrication",
    trade: "Welder",
    city: "Visakhapatnam",
    bio: "Worked at port-side fabrication yards. Gate, grill and structural steel work.",
    experience_years: 11,
    daily_rate: 1100,
    phone: "9876543212",
    skills: ["MIG", "TIG", "Structural steel", "Gates & grills"],
    available: true,
    verified: false,
    company_name: null,
    is_sample: true,
    created_at: "2025-01-12T10:00:00Z",
    updated_at: "2025-01-12T10:00:00Z",
  },
  {
    id: "00000000-0000-0000-0000-000000000004",
    user_id: null,
    account_type: "worker",
    full_name: "Srinivas Rao Bandi",
    headline: "Carpenter — modular kitchens & wardrobes",
    trade: "Carpenter",
    city: "Hyderabad",
    bio: "Plywood and laminate modular work, site measurement to finish.",
    experience_years: 9,
    daily_rate: 1000,
    phone: "9876543213",
    skills: ["Modular kitchen", "Wardrobes", "Laminate"],
    available: true,
    verified: true,
    company_name: null,
    is_sample: true,
    created_at: "2025-01-13T11:00:00Z",
    updated_at: "2025-01-13T11:00:00Z",
  },
  {
    id: "00000000-0000-0000-0000-000000000005",
    user_id: null,
    account_type: "worker",
    full_name: "Anitha Kumari",
    headline: "Split AC installation & servicing",
    trade: "AC Technician",
    city: "Bengaluru",
    bio: "Installs and gas top-ups for split and window units. Own vacuum pump.",
    experience_years: 6,
    daily_rate: 950,
    phone: "9876543214",
    skills: ["Split AC", "Gas charging", "PCB repair"],
    available: true,
    verified: false,
    company_name: null,
    is_sample: true,
    created_at: "2025-01-14T12:00:00Z",
    updated_at: "2025-01-14T12:00:00Z",
  },
  {
    id: "00000000-0000-0000-0000-000000000006",
    user_id: null,
    account_type: "worker",
    full_name: "Venkatesh Murugan",
    headline: "Heavy vehicle driver, LMV + HMV licence",
    trade: "Driver",
    city: "Chennai",
    bio: "Long-haul and city delivery. Clean licence record.",
    experience_years: 12,
    daily_rate: 850,
    phone: "9876543215",
    skills: ["HMV", "Route planning", "Loading"],
    available: true,
    verified: true,
    company_name: null,
    is_sample: true,
    created_at: "2025-01-15T13:00:00Z",
    updated_at: "2025-01-15T13:00:00Z",
  },
  {
    id: "00000000-0000-0000-0000-000000000007",
    user_id: null,
    account_type: "worker",
    full_name: "Naga Babu Pothuri",
    headline: "Mason — brickwork & plastering",
    trade: "Mason",
    city: "Amaravati",
    bio: "Residential construction crew lead, 6-person team available.",
    experience_years: 16,
    daily_rate: 950,
    phone: "9876543216",
    skills: ["Brickwork", "Plastering", "Tiling"],
    available: true,
    verified: false,
    company_name: null,
    is_sample: true,
    created_at: "2025-01-16T14:00:00Z",
    updated_at: "2025-01-16T14:00:00Z",
  },
  {
    id: "00000000-0000-0000-0000-000000000008",
    user_id: null,
    account_type: "worker",
    full_name: "Suresh Yadav",
    headline: "CNC machine operator",
    trade: "Machine Operator",
    city: "Hyderabad",
    bio: "VMC/CNC lathe operation, Fanuc controls, reading drawings.",
    experience_years: 5,
    daily_rate: 800,
    phone: "9876543217",
    skills: ["CNC lathe", "Fanuc", "Drawing reading"],
    available: true,
    verified: false,
    company_name: null,
    is_sample: true,
    created_at: "2025-01-17T15:00:00Z",
    updated_at: "2025-01-17T15:00:00Z",
  },
  {
    id: "00000000-0000-0000-0000-000000000011",
    user_id: null,
    account_type: "employer",
    full_name: "Sri Sai Constructions",
    headline: "Residential builder",
    trade: null,
    city: "Vijayawada",
    bio: "Building G+4 apartments across Vijayawada.",
    experience_years: 0,
    daily_rate: null,
    phone: "9876543220",
    skills: [],
    available: true,
    verified: true,
    company_name: "Sri Sai Constructions",
    is_sample: true,
    created_at: "2025-01-05T08:00:00Z",
    updated_at: "2025-01-05T08:00:00Z",
  },
  {
    id: "00000000-0000-0000-0000-000000000012",
    user_id: null,
    account_type: "employer",
    full_name: "Coastal Fabricators",
    headline: "Steel fabrication unit",
    trade: null,
    city: "Visakhapatnam",
    bio: "Fabrication for port and industrial clients.",
    experience_years: 0,
    daily_rate: null,
    phone: "9876543221",
    skills: [],
    available: true,
    verified: false,
    company_name: "Coastal Fabricators",
    is_sample: true,
    created_at: "2025-01-06T08:00:00Z",
    updated_at: "2025-01-06T08:00:00Z",
  },
  {
    id: "00000000-0000-0000-0000-000000000013",
    user_id: null,
    account_type: "employer",
    full_name: "CoolAir Services",
    headline: "AC sales & service",
    trade: null,
    city: "Bengaluru",
    bio: "Service contracts across east Bengaluru.",
    experience_years: 0,
    daily_rate: null,
    phone: "9876543222",
    skills: [],
    available: true,
    verified: true,
    company_name: "CoolAir Services",
    is_sample: true,
    created_at: "2025-01-07T08:00:00Z",
    updated_at: "2025-01-07T08:00:00Z",
  },
];

const initialJobs: MockJob[] = [
  {
    id: "10000000-0000-0000-0000-000000000001",
    posted_by: "00000000-0000-0000-0000-000000000011",
    title: "Site electrician for G+4 apartment",
    company: "Sri Sai Constructions",
    trade: "Electrician",
    city: "Vijayawada",
    description:
      "Full electrical work for a 20-flat block in Gunadala: conduit laying, DB fitting, final wiring. Materials supplied. Site is 2 km from bus stand.",
    pay_min: 1000,
    pay_max: 1300,
    pay_unit: "day",
    job_type: "contract",
    experience_min: 3,
    skills: ["House wiring", "Panel boards"],
    status: "open",
    created_at: "2025-02-01T10:00:00Z",
  },
  {
    id: "10000000-0000-0000-0000-000000000002",
    posted_by: "00000000-0000-0000-0000-000000000011",
    title: "Masons needed — 3 positions",
    company: "Sri Sai Constructions",
    trade: "Mason",
    city: "Vijayawada",
    description:
      "Brickwork and internal plastering for ongoing project. Daily payment on Saturday. Tea and lunch provided.",
    pay_min: 850,
    pay_max: 1000,
    pay_unit: "day",
    job_type: "full_time",
    experience_min: 2,
    skills: ["Brickwork", "Plastering"],
    status: "open",
    created_at: "2025-02-02T10:00:00Z",
  },
  {
    id: "10000000-0000-0000-0000-000000000003",
    posted_by: "00000000-0000-0000-0000-000000000012",
    title: "TIG welder for SS piping",
    company: "Coastal Fabricators",
    trade: "Welder",
    city: "Visakhapatnam",
    description:
      "Stainless steel pipe welding for food processing client. Must pass a test weld on day one.",
    pay_min: 28000,
    pay_max: 35000,
    pay_unit: "month",
    job_type: "full_time",
    experience_min: 4,
    skills: ["TIG"],
    status: "open",
    created_at: "2025-02-03T10:00:00Z",
  },
  {
    id: "10000000-0000-0000-0000-000000000004",
    posted_by: "00000000-0000-0000-0000-000000000012",
    title: "Helper — fabrication shop",
    company: "Coastal Fabricators",
    trade: "Welder",
    city: "Visakhapatnam",
    description: "Grinding, cutting and material handling. Training on MIG provided.",
    pay_min: 14000,
    pay_max: 16000,
    pay_unit: "month",
    job_type: "full_time",
    experience_min: 0,
    skills: ["Grinding"],
    status: "open",
    created_at: "2025-02-04T10:00:00Z",
  },
  {
    id: "10000000-0000-0000-0000-000000000005",
    posted_by: "00000000-0000-0000-0000-000000000013",
    title: "AC service technician (summer season)",
    company: "CoolAir Services",
    trade: "AC Technician",
    city: "Bengaluru",
    description:
      "March–June contract. Two-wheeler required; fuel allowance paid. Servicing split units in Whitefield and KR Puram.",
    pay_min: 22000,
    pay_max: 26000,
    pay_unit: "month",
    job_type: "contract",
    experience_min: 1,
    skills: ["Split AC", "Gas charging"],
    status: "open",
    created_at: "2025-02-05T10:00:00Z",
  },
  {
    id: "10000000-0000-0000-0000-000000000006",
    posted_by: "00000000-0000-0000-0000-000000000013",
    title: "Plumber for office fit-out",
    company: "CoolAir Services",
    trade: "Plumber",
    city: "Bengaluru",
    description: "Pantry and washroom plumbing for a 3-floor office fit-out. 3-week job.",
    pay_min: 900,
    pay_max: 1100,
    pay_unit: "day",
    job_type: "contract",
    experience_min: 3,
    skills: ["CPVC", "Concealed fitting"],
    status: "open",
    created_at: "2025-02-06T10:00:00Z",
  },
  {
    id: "10000000-0000-0000-0000-000000000007",
    posted_by: "00000000-0000-0000-0000-000000000011",
    title: "Carpenter — door frames & shutters",
    company: "Sri Sai Constructions",
    trade: "Carpenter",
    city: "Guntur",
    description: "Fix door frames and flush shutters across 12 units. Piece rate also negotiable.",
    pay_min: 900,
    pay_max: 1100,
    pay_unit: "day",
    job_type: "contract",
    experience_min: 2,
    skills: ["Door fitting"],
    status: "open",
    created_at: "2025-02-07T10:00:00Z",
  },
  {
    id: "10000000-0000-0000-0000-000000000008",
    posted_by: "00000000-0000-0000-0000-000000000012",
    title: "Delivery driver (LMV)",
    company: "Coastal Fabricators",
    trade: "Driver",
    city: "Visakhapatnam",
    description: "Deliver fabricated parts to clients within 60 km. Tata Ace provided.",
    pay_min: 16000,
    pay_max: 19000,
    pay_unit: "month",
    job_type: "full_time",
    experience_min: 2,
    skills: ["LMV"],
    status: "open",
    created_at: "2025-02-08T10:00:00Z",
  },
];

const initialTools: MockToolListing[] = [
  {
    id: "20000000-0000-0000-0000-000000000001",
    owner_id: "00000000-0000-0000-0000-000000000001",
    title: "Bosch GBH 2-26 rotary hammer",
    category: "Power tools",
    description: "SDS-plus hammer drill with 3 bits. Good for chasing walls for conduit.",
    city: "Vijayawada",
    listing_type: "rent",
    price: 250,
    price_unit: "day",
    deposit: 2000,
    condition: "good",
    available: true,
    created_at: "2025-02-01T11:00:00Z",
  },
  {
    id: "20000000-0000-0000-0000-000000000002",
    owner_id: "00000000-0000-0000-0000-000000000003",
    title: "Inverter MIG welding machine 250A",
    category: "Welding",
    description: "Works on single phase. Comes with torch and earth clamp; wire not included.",
    city: "Visakhapatnam",
    listing_type: "rent",
    price: 600,
    price_unit: "day",
    deposit: 5000,
    condition: "good",
    available: true,
    created_at: "2025-02-02T11:00:00Z",
  },
  {
    id: "20000000-0000-0000-0000-000000000003",
    owner_id: "00000000-0000-0000-0000-000000000007",
    title: "Concrete mixer — half bag",
    category: "Construction",
    description:
      "Diesel half-bag mixer, recently serviced. Transport within Amaravati at extra cost.",
    city: "Amaravati",
    listing_type: "rent",
    price: 1500,
    price_unit: "day",
    deposit: 10000,
    condition: "fair",
    available: true,
    created_at: "2025-02-03T11:00:00Z",
  },
  {
    id: "20000000-0000-0000-0000-000000000004",
    owner_id: "00000000-0000-0000-0000-000000000005",
    title: "Vacuum pump + manifold gauge set",
    category: "HVAC",
    description: "Dual-stage pump with R32/R410 gauges.",
    city: "Bengaluru",
    listing_type: "rent",
    price: 400,
    price_unit: "day",
    deposit: 3000,
    condition: "like_new",
    available: true,
    created_at: "2025-02-04T11:00:00Z",
  },
  {
    id: "20000000-0000-0000-0000-000000000005",
    owner_id: "00000000-0000-0000-0000-000000000004",
    title: 'Makita circular saw 7"',
    category: "Power tools",
    description: "Used for two years, new blade fitted.",
    city: "Hyderabad",
    listing_type: "sell",
    price: 4500,
    price_unit: "once",
    deposit: 0,
    condition: "good",
    available: true,
    created_at: "2025-02-05T11:00:00Z",
  },
  {
    id: "20000000-0000-0000-0000-000000000006",
    owner_id: "00000000-0000-0000-0000-000000000007",
    title: "Aluminium scaffolding set (6 m)",
    category: "Construction",
    description: "Two towers with wheels and planks.",
    city: "Guntur",
    listing_type: "rent",
    price: 800,
    price_unit: "day",
    deposit: 8000,
    condition: "good",
    available: true,
    created_at: "2025-02-06T11:00:00Z",
  },
];

const initialCommunities: MockCommunity[] = [
  {
    id: "30000000-0000-0000-0000-000000000001",
    slug: "electricians-ap",
    name: "Electricians of Andhra",
    description: "Wiring standards, panel questions and job leads for electricians across AP.",
    trade: "Electrician",
    created_at: "2025-01-01T00:00:00Z",
  },
  {
    id: "30000000-0000-0000-0000-000000000002",
    slug: "welders-network",
    name: "Welders Network",
    description: "Techniques, machine advice and fabrication work.",
    trade: "Welder",
    created_at: "2025-01-01T00:00:00Z",
  },
  {
    id: "30000000-0000-0000-0000-000000000003",
    slug: "ac-technicians",
    name: "AC & Refrigeration Techs",
    description: "Gas types, troubleshooting and seasonal work.",
    trade: "AC Technician",
    created_at: "2025-01-01T00:00:00Z",
  },
  {
    id: "30000000-0000-0000-0000-000000000004",
    slug: "construction-crews",
    name: "Construction Crews",
    description: "Masons, carpenters and site leads coordinating work.",
    trade: "Mason",
    created_at: "2025-01-01T00:00:00Z",
  },
];

const initialPosts: MockPost[] = [
  {
    id: "40000000-0000-0000-0000-000000000001",
    community_id: "30000000-0000-0000-0000-000000000001",
    author_id: "00000000-0000-0000-0000-000000000001",
    title: "Which RCCB rating do you use for bathrooms?",
    body: "Clients keep asking. I use 30mA for wet areas. Anyone using 10mA for geyser circuits?",
    created_at: "2025-02-10T12:00:00Z",
  },
  {
    id: "40000000-0000-0000-0000-000000000002",
    community_id: "30000000-0000-0000-0000-000000000002",
    author_id: "00000000-0000-0000-0000-000000000003",
    title: "Argon prices in Vizag this month",
    body: "Paid ₹2,400 for a refill near Gajuwaka. Is that normal now?",
    created_at: "2025-02-11T12:00:00Z",
  },
  {
    id: "40000000-0000-0000-0000-000000000003",
    community_id: "30000000-0000-0000-0000-000000000003",
    author_id: "00000000-0000-0000-0000-000000000005",
    title: "R32 units — brazing tips",
    body: "Sharing my nitrogen purge setup for R32 installs, ask anything.",
    created_at: "2025-02-12T12:00:00Z",
  },
  {
    id: "40000000-0000-0000-0000-000000000004",
    community_id: "30000000-0000-0000-0000-000000000004",
    author_id: "00000000-0000-0000-0000-000000000007",
    title: "Need 2 masons in Amaravati next week",
    body: "Plastering work, 10 days. Message me.",
    created_at: "2025-02-13T12:00:00Z",
  },
];

const mockStore: Record<string, Record<string, unknown>[]> = {
  profiles: initialProfiles as unknown as Record<string, unknown>[],
  jobs: initialJobs as unknown as Record<string, unknown>[],
  tool_listings: initialTools as unknown as Record<string, unknown>[],
  communities: initialCommunities as unknown as Record<string, unknown>[],
  posts: initialPosts as unknown as Record<string, unknown>[],
  comments: [],
  applications: [],
  rentals: [],
  saved_items: [],
  conversations: [],
  messages: [],
  notifications: [],
  user_roles: [],
};

function generateId(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function resolveRelations(
  table: string,
  item: Record<string, unknown>,
  select: string,
): Record<string, unknown> {
  const result = { ...item };
  if (table === "jobs" && select.includes("employer")) {
    const employer = mockStore["profiles"]?.find((p) => p["id"] === item["posted_by"]);
    result["employer"] = employer ? { ...employer } : null;
  }
  if (table === "tool_listings" && select.includes("owner")) {
    const owner = mockStore["profiles"]?.find((p) => p["id"] === item["owner_id"]);
    result["owner"] = owner ? { ...owner } : null;
  }
  if (table === "posts") {
    if (select.includes("author")) {
      const author = mockStore["profiles"]?.find((p) => p["id"] === item["author_id"]);
      result["author"] = author ? { ...author } : null;
    }
    if (select.includes("community")) {
      const comm = mockStore["communities"]?.find((c) => c["id"] === item["community_id"]);
      result["community"] = comm ? { ...comm } : null;
    }
  }
  if (table === "comments" && select.includes("author")) {
    const author = mockStore["profiles"]?.find((p) => p["id"] === item["author_id"]);
    result["author"] = author ? { ...author } : null;
  }
  return result;
}

export async function handleMockSupabaseRequest(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> {
  const rawUrl =
    typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
  const parsed = new URL(rawUrl, "http://localhost");
  const method = (init?.method || "GET").toUpperCase();
  const accept = init?.headers ? (new Headers(init.headers).get("accept") ?? "") : "";
  const isSingle = accept.includes("vnd.pgrst.object+json");

  // Check auth endpoints
  if (parsed.pathname.includes("/auth/v1/")) {
    return new Response(JSON.stringify({ user: null, session: null }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  // Parse table name from /rest/v1/<table_name>
  const restMatch = parsed.pathname.match(/\/rest\/v1\/([^/?]+)/);
  if (!restMatch || !restMatch[1]) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: { "content-type": "application/json" },
    });
  }

  const table = restMatch[1];
  if (!mockStore[table]) {
    mockStore[table] = [];
  }
  const records = mockStore[table]!;

  if (method === "GET") {
    let result = [...records];
    const select = parsed.searchParams.get("select") ?? "*";

    // Apply PostgREST filter parameters
    parsed.searchParams.forEach((val, key) => {
      if (key === "select" || key === "order" || key === "limit" || key === "offset") return;

      if (val.startsWith("eq.")) {
        const rawTarget = val.slice(3);
        const target = rawTarget === "true" ? true : rawTarget === "false" ? false : rawTarget;
        result = result.filter((row) => String(row[key]) === String(target));
      } else if (val.startsWith("neq.")) {
        const target = val.slice(4);
        result = result.filter((row) => String(row[key]) !== target);
      } else if (val.startsWith("ilike.")) {
        const query = val.slice(6).replace(/%/g, "").toLowerCase();
        result = result.filter((row) =>
          String(row[key] ?? "")
            .toLowerCase()
            .includes(query),
        );
      } else if (val.startsWith("in.")) {
        const items = val
          .slice(3)
          .replace(/^\(|\)$/g, "")
          .split(",");
        result = result.filter((row) => items.includes(String(row[key])));
      }
    });

    // Apply order
    const order = parsed.searchParams.get("order");
    if (order) {
      const [col, dir] = order.split(".");
      if (col) {
        const desc = dir === "desc";
        result.sort((a, b) => {
          const va = a[col];
          const vb = b[col];
          if (va === vb) return 0;
          if (va == null) return 1;
          if (vb == null) return -1;
          const cmp = va > vb ? 1 : -1;
          return desc ? -cmp : cmp;
        });
      }
    }

    // Apply limit
    const limit = parsed.searchParams.get("limit");
    if (limit) {
      const n = parseInt(limit, 10);
      if (!isNaN(n)) result = result.slice(0, n);
    }

    // Join relations if requested
    const resolved = result.map((item) => resolveRelations(table, item, select));

    if (isSingle) {
      if (resolved.length === 0) {
        return new Response(JSON.stringify(null), {
          status: 200,
          headers: {
            "content-type": "application/json",
            "content-range": "0-0/0",
          },
        });
      }
      return new Response(JSON.stringify(resolved[0]), {
        status: 200,
        headers: {
          "content-type": "application/vnd.pgrst.object+json",
          "content-range": `0-0/${records.length}`,
        },
      });
    }

    return new Response(JSON.stringify(resolved), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "content-range": `0-${resolved.length}/${records.length}`,
      },
    });
  }

  if (method === "POST") {
    let bodyData: unknown = {};
    try {
      if (typeof init?.body === "string") {
        bodyData = JSON.parse(init.body);
      }
    } catch {
      bodyData = {};
    }

    const itemsToInsert = Array.isArray(bodyData) ? bodyData : [bodyData];
    const createdItems: Record<string, unknown>[] = [];

    for (const raw of itemsToInsert) {
      const item: Record<string, unknown> = {
        id: generateId(),
        created_at: new Date().toISOString(),
        ...(typeof raw === "object" && raw ? (raw as Record<string, unknown>) : {}),
      };
      records.push(item);
      createdItems.push(item);
    }

    return new Response(JSON.stringify(Array.isArray(bodyData) ? createdItems : createdItems[0]), {
      status: 201,
      headers: { "content-type": "application/json" },
    });
  }

  if (method === "PATCH") {
    let patchData: Record<string, unknown> = {};
    try {
      if (typeof init?.body === "string") {
        patchData = JSON.parse(init.body) as Record<string, unknown>;
      }
    } catch {
      patchData = {};
    }

    // Identify target rows by query params
    const updatedItems: Record<string, unknown>[] = [];
    records.forEach((row, i) => {
      let match = true;
      parsed.searchParams.forEach((val, key) => {
        if (key === "select" || key === "order" || key === "limit") return;
        if (val.startsWith("eq.")) {
          if (String(row[key]) !== val.slice(3)) match = false;
        }
      });
      if (match) {
        records[i] = { ...row, ...patchData, updated_at: new Date().toISOString() };
        updatedItems.push(records[i]!);
      }
    });

    return new Response(JSON.stringify(updatedItems), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  if (method === "DELETE") {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  return new Response(JSON.stringify([]), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
