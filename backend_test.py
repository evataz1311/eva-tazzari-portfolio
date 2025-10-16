#!/usr/bin/env python3
"""
Backend API Testing for Eva Tazzari Portfolio
Tests all endpoints systematically as requested
"""

import requests
import json
import sys
import os
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BASE_URL = get_backend_url()
if not BASE_URL:
    print("ERROR: Could not get REACT_APP_BACKEND_URL from /app/frontend/.env")
    sys.exit(1)

API_URL = f"{BASE_URL}/api"
print(f"Testing API at: {API_URL}")

class TestResults:
    def __init__(self):
        self.passed = 0
        self.failed = 0
        self.errors = []
        
    def test_passed(self, test_name):
        self.passed += 1
        print(f"✅ PASS: {test_name}")
        
    def test_failed(self, test_name, error):
        self.failed += 1
        self.errors.append(f"{test_name}: {error}")
        print(f"❌ FAIL: {test_name} - {error}")
        
    def summary(self):
        total = self.passed + self.failed
        print(f"\n{'='*60}")
        print(f"TEST SUMMARY: {self.passed}/{total} tests passed")
        print(f"{'='*60}")
        
        if self.errors:
            print("\nFAILED TESTS:")
            for error in self.errors:
                print(f"  - {error}")
        
        return self.failed == 0

def test_endpoint(method, endpoint, expected_status=200, data=None, test_name=None):
    """Generic endpoint testing function"""
    if not test_name:
        test_name = f"{method} {endpoint}"
    
    try:
        url = f"{API_URL}{endpoint}"
        
        if method == "GET":
            response = requests.get(url, timeout=10)
        elif method == "POST":
            response = requests.post(url, json=data, timeout=10)
        else:
            results.test_failed(test_name, f"Unsupported method: {method}")
            return None
            
        if response.status_code == expected_status:
            results.test_passed(test_name)
            return response.json()
        else:
            results.test_failed(test_name, f"Expected {expected_status}, got {response.status_code}")
            return None
            
    except requests.exceptions.RequestException as e:
        results.test_failed(test_name, f"Request failed: {str(e)}")
        return None
    except json.JSONDecodeError as e:
        results.test_failed(test_name, f"Invalid JSON response: {str(e)}")
        return None
    except Exception as e:
        results.test_failed(test_name, f"Unexpected error: {str(e)}")
        return None

def validate_bilingual_fields(data, required_fields, test_name):
    """Validate that bilingual fields are present"""
    missing_fields = []
    
    for field in required_fields:
        if field not in data:
            missing_fields.append(field)
    
    if missing_fields:
        results.test_failed(f"{test_name} - Field validation", f"Missing fields: {missing_fields}")
        return False
    else:
        results.test_passed(f"{test_name} - Field validation")
        return True

def main():
    global results
    results = TestResults()
    
    print("Starting Eva Tazzari Portfolio Backend API Tests")
    print("=" * 60)
    
    # 1. Health Check
    print("\n1. HEALTH CHECK")
    print("-" * 30)
    health_data = test_endpoint("GET", "/", test_name="Health check endpoint")
    if health_data and "message" in health_data:
        results.test_passed("Health check - message field present")
    elif health_data:
        results.test_failed("Health check - message field", "Message field missing from response")
    
    # 2. Artworks Endpoints
    print("\n2. ARTWORKS ENDPOINTS")
    print("-" * 30)
    
    # Get all artworks
    artworks_data = test_endpoint("GET", "/artworks", test_name="GET /artworks - fetch all")
    if artworks_data and "artworks" in artworks_data:
        artworks = artworks_data["artworks"]
        results.test_passed("Artworks response structure")
        
        # Test bilingual fields if artworks exist
        if artworks:
            artwork = artworks[0]
            bilingual_fields = ["title_it", "title_en", "technique_it", "technique_en", 
                              "description_it", "description_en"]
            validate_bilingual_fields(artwork, bilingual_fields, "Artwork bilingual fields")
            
            # Test specific artwork by ID
            artwork_id = artwork.get("id")
            if artwork_id:
                specific_artwork = test_endpoint("GET", f"/artworks/{artwork_id}", 
                                               test_name=f"GET /artworks/{artwork_id} - fetch specific")
                if specific_artwork and "artwork" in specific_artwork:
                    results.test_passed("Specific artwork response structure")
        else:
            print("  ⚠️  No artworks found in database for detailed testing")
    
    # Test category filtering
    test_endpoint("GET", "/artworks?category=sculpture", test_name="GET /artworks?category=sculpture")
    test_endpoint("GET", "/artworks?category=wearable", test_name="GET /artworks?category=wearable")
    
    # Test 404 for non-existent artwork
    test_endpoint("GET", "/artworks/999", expected_status=404, test_name="GET /artworks/999 - test 404")
    
    # 3. Articles Endpoints
    print("\n3. ARTICLES ENDPOINTS")
    print("-" * 30)
    
    # Get all articles
    articles_data = test_endpoint("GET", "/articles", test_name="GET /articles - fetch all")
    if articles_data and "articles" in articles_data:
        articles = articles_data["articles"]
        results.test_passed("Articles response structure")
        
        # Test bilingual fields if articles exist
        if articles:
            article = articles[0]
            bilingual_fields = ["title_it", "title_en", "excerpt_it", "excerpt_en", 
                              "content_it", "content_en"]
            validate_bilingual_fields(article, bilingual_fields, "Article bilingual fields")
            
            # Test specific article by ID
            article_id = article.get("id")
            if article_id:
                specific_article = test_endpoint("GET", f"/articles/{article_id}", 
                                                test_name=f"GET /articles/{article_id} - fetch specific")
                if specific_article and "article" in specific_article:
                    results.test_passed("Specific article response structure")
        else:
            print("  ⚠️  No articles found in database for detailed testing")
    
    # Test 404 for non-existent article
    test_endpoint("GET", "/articles/999", expected_status=404, test_name="GET /articles/999 - test 404")
    
    # 4. Bio Endpoint
    print("\n4. BIO ENDPOINT")
    print("-" * 30)
    
    bio_data = test_endpoint("GET", "/bio", test_name="GET /bio - fetch bio data")
    if bio_data and "bio" in bio_data:
        bio = bio_data["bio"]
        bilingual_fields = ["short_it", "short_en", "extended_it", "extended_en"]
        validate_bilingual_fields(bio, bilingual_fields, "Bio bilingual fields")
        
        # Check for exhibitions array
        if "exhibitions" in bio:
            results.test_passed("Bio exhibitions field present")
        else:
            results.test_failed("Bio exhibitions field", "Exhibitions field missing")
    
    # 5. Contact Endpoint
    print("\n5. CONTACT ENDPOINT")
    print("-" * 30)
    
    contact_data = {
        "name": "Eva Rossi",
        "email": "eva.rossi@example.com",
        "message": "Sono interessata alle tue opere scultoree. Potresti fornirmi maggiori informazioni sulla disponibilità?"
    }
    
    contact_response = test_endpoint("POST", "/contact", data=contact_data, 
                                   test_name="POST /contact - submit contact form")
    if contact_response:
        if "success" in contact_response and contact_response["success"]:
            results.test_passed("Contact form submission success")
        else:
            results.test_failed("Contact form response", "Success field missing or false")
        
        if "message" in contact_response:
            results.test_passed("Contact form response message")
        else:
            results.test_failed("Contact form response", "Message field missing")
    
    # Final summary
    success = results.summary()
    
    if not success:
        print(f"\n⚠️  {results.failed} tests failed. Check backend logs for details.")
        print("Backend logs can be checked with:")
        print("  tail -n 100 /var/log/supervisor/backend.*.log")
    
    return success

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)