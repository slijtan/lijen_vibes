variable "aws_region" {
  description = "AWS region for all resources"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Project name used in resource naming"
  type        = string
  default     = "lijen-vibes"
}

variable "domain_name" {
  description = "Custom domain name"
  type        = string
  default     = "lijenvibes.fun"
}
