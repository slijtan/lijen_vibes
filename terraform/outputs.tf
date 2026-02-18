output "frontend_bucket_name" {
  description = "S3 bucket name for frontend assets"
  value       = aws_s3_bucket.frontend.id
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (for cache invalidation)"
  value       = aws_cloudfront_distribution.main.id
}

output "cloudfront_domain_name" {
  description = "CloudFront domain"
  value       = aws_cloudfront_distribution.main.domain_name
}

output "site_url" {
  description = "The public URL for the site"
  value       = "https://${var.domain_name}"
}

output "nameservers" {
  description = "Nameservers for the hosted zone (update domain registrar if needed)"
  value       = aws_route53_zone.main.name_servers
}
