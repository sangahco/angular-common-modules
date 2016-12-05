<%@ page language="java" contentType="application/json; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="j" uri="/WEB-INF/tld/json.tld" %>
<c:if test="${not empty errorMessage}" >
<j:object escapeXml="false">
	<j:object name="error">
		<j:property name="message" value="${errorMessage}" />
	</j:object>
</j:object>
</c:if>
<c:if test="${empty errorMessage}" >{}</c:if>