create extension if not exists "uuid-ossp";
create table products (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  price decimal not null,
  stock int default 0,
  visible boolean default true
);
create table orders (
  id uuid primary key default uuid_generate_v4(),
  customer_name text not null,
  total_amount decimal not null,
  created_at timestamptz default now()
);
