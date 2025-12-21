import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface FormData {
  businessType: string;
  followerCount?: string; // Conditional for Content Creators
  bottleneck: string;
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string; // Full content
  date: string;
  image: string;
}

export interface CaseStudy {
  title: string;
  client: string;
  metric: string;
  metricLabel: string;
  description: string;
  fullStory: string; // The detailed narrative
  image: string;
  tags: string[];
}

export enum FormStep {
  BUSINESS_TYPE = 1,
  DETAILS = 2,
  BOTTLENECK = 3,
  CONTACT = 4,
  SUCCESS = 5
}

export type ViewState = 'home' | 'blog' | 'article' | 'privacy' | 'terms' | 'case-studies' | 'case-study-detail';